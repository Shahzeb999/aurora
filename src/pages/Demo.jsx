import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../Earth";
import { motion } from "framer-motion";
import { Box, Flex, Center, Text, Button, FormControl, Input } from "@chakra-ui/react";
import { PrimaryButton } from "../components/Buttons";
import useColorSwitcher from "../utils/useColorSwitcher";
const { webkitSpeechRecognition } = window;
   
const Demo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [res_questions, setResQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { feedbacks } = useState([])
  const [isListening, setIsListening] = useState(false);
  const { secondary } = useColorSwitcher();
  const [showForm, setShowForm] = useState(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const handleInterview = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File submitted:', selectedFile);
      const domain = document.getElementById('domain').value;

      const formData = new FormData();
      formData.append('domain', domain);
      formData.append('resume', selectedFile);

      fetch('http://127.0.0.1:5000/generate_resume_questions', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setResQuestions(data.questions);
          setCurrentQuestion(0);
          generateAndPlaySpeech(data.questions[0]); // Generate audio for the first question
          setShowForm(false); // Hide the form after submitting resume
        })
        .catch(error => {
          console.error('Error submitting file:', error);
          alert('Error submitting file. Please try again.'); // Display an error message
        });
    } else {
      alert('Please upload a PDF file.');
    }
  };


  const submitAnswer = () => {
    const answerInput = document.getElementById("answerInput");
    const answer = answerInput.value.trim(); // Trim whitespace from the answer

    if (answer) {
      setAnswers([...answers, answer]);
      answerInput.value = ""; // Clear the input field
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion < res_questions.length - 1) {
        generateAndPlaySpeech(res_questions[currentQuestion + 1]); // Generate audio for the next question
      }
    } else {
      alert("Please provide an answer.");
    }
  };

  const generateAndPlaySpeech = (text_to_speak) => {
    fetch("http://127.0.0.1:5000/generate_speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text_to_speak }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const audioURL = URL.createObjectURL(blob);
        const audio = new Audio(audioURL);
        audio.play();
        audio.addEventListener('ended', () => {
          startListening(); // Start listening for user's answer after audio ends
        });
      })
      .catch(error => console.error("Error generating or playing speech:", error));
  };

  const startListening = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Keep listening even if the user pauses
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Speech recognition started. Speak into the microphone.");
      setIsListening(true);
    };

    setTimeout(() => {
      if (isListening) {
        console.log("Speech recognition stopped due to timeout.");
        recognition.stop();
        // Once recognition stops, submit the answer and prepare for the next question
      }
    }, 120000); // 2 minutes

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript;
      console.log("Recognized: ", result);
      const answerInput = document.getElementById("answerInput");
      answerInput.value += result + " ";
      recognition.stop(); // Stop recognition after one answer is received
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error: ", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
      setIsListening(false);
      submitAnswer(); // Submit the recorded answer after recognition ends
    };

    recognition.start();
  };

  const submitAnswers = () => {
    const formData = new FormData();
    formData.append("questions", JSON.stringify(res_questions));
    formData.append("answers", JSON.stringify(answers));

    fetch("/validate_resume_responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        feedbacks.resume_feedbacks = data.feedbacks;
        feedbacks.resume_score = data.average_rating;
        // generateTechnicalQuestions();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="div"
        mt={{ base: "4em", md: "8em" }}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Flex justifyContent="center">
          <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
            {showForm ? (
              <Flex
                flexDir="column"
                justifyContent="space-around"
                h={{ base: "500", lg: "500" }}
                alignItems={{ sm: "center", lg: "flex-start" }}
              >
                <Text fontSize="3xl" fontWeight="bold" mb={4}>
                  Aurora
                </Text>
                <FormControl>
                  <Input id="domain" type="text" placeholder="Enter the domain you want to give interview" mb={3} />
                </FormControl>
                <PrimaryButton>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Upload resume
                    <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
                  </label>
                </PrimaryButton>
                {selectedFile && <Text mt={2}>File ready to be submitted: {selectedFile.name}</Text>}
                <Flex justify="center">
                  <Button colorScheme="blue" mr={3} onClick={handleInterview}>Start Interview</Button>
                </Flex>
              </Flex>
            ) : (
              <Box>
                {res_questions.length > 0 && (
                  <>
                    <Text fontSize="lg" mb={4}>
                      {res_questions[currentQuestion]}
                    </Text>
                    <FormControl>
                      <Input id="answerInput" type="text" placeholder="Enter your answer" />
                    </FormControl>
                    <PrimaryButton mt={4} onClick={submitAnswer}>Submit Answer</PrimaryButton>
                  </>
                )}
                {currentQuestion === res_questions.length && (
                  <PrimaryButton onClick={submitAnswers}>Submit</PrimaryButton>
                )}
              </Box>
            )}
          </Box>
          <Center
            width={{ lg: "20rem", xl: "65rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
          >
            <Canvas style={{ height: '100vh' }}>
              <ambientLight />
              <OrbitControls enableZoom={false} />
              <Suspense fallback={null}>
                <Earth />
                <Environment preset='sunset' />
                <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000" />
              </Suspense>
            </Canvas>
          </Center>
        </Flex>
      </Box>
    </motion.div>
  );
  };

export default Demo;
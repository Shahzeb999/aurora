import React, { useEffect, useState } from "react";

const InterviewPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resumeQuestions, setResumeQuestions] = useState([]);
  const [techQuestions, setTechQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [feedbacks, setFeedbacks] = useState({});
  const [resVal, setResVal] = useState(0);

  useEffect(() => {
    fetchResumeQuestions();
    startVideo();
  }, []);

  const startListening = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Speech recognition started. Speak into the microphone.");
    };

    recognition.onresult = (event) => {
      const result = event.results[event.results.length - 1][0].transcript;
      const answerInput = document.getElementById("answerInput");
      answerInput.value += result + " ";
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error: ", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
    };

    recognition.start();
  };

  const submitAnswer = () => {
    const answerInput = document.getElementById("answerInput");
    const answer = answerInput.value;
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    answerInput.value = "";
  };

  const submitAnswers = () => {
    fetch("/validate_resume_responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questions: resumeQuestions,
        answers: answers,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks({
          ...feedbacks,
          resume_feedbacks: data.feedbacks,
          resume_score: data.average_rating,
        });
        generateTechnicalQuestions();
      })
      .catch((error) => console.error("Error:", error));
  };

  const generateAndPlaySpeech = async (textToSpeak) => {
    try {
      const response = await fetch("/generate_speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textToSpeak }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const audioURL = URL.createObjectURL(blob);
      const audio = new Audio(audioURL);
      audio.play();
    } catch (error) {
      console.error("Error generating or playing speech:", error);
    }
  };

  const startVideo = () => {
    const video = document.getElementById("video");

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser doesn't support accessing the camera.");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing the camera:", error);
        alert("Error accessing the camera. Please check your camera settings.");
      });
  };

  const fetchResumeQuestions = () => {
    fetch("/generate_resume_questions", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setResumeQuestions(data.questions);
        setCurrentQuestion(0);
      })
      .catch((error) => console.error("Error:", error));
  };

  const displayQuestion = () => {
    if (currentQuestion < resumeQuestions.length) {
      const questionText = resumeQuestions[currentQuestion];
      document.getElementById("questionText").textContent = questionText;
      generateAndPlaySpeech(questionText);
    } else {
      submitAnswers();
    }
  };

  return (
    <div className="container">
      <div id="videoSection" style={{ display: "none" }}>
        <video id="video" autoPlay></video>
      </div>

      <div id="questionSection">
        <p id="questionText"></p>
        <textarea id="answerInput" placeholder="Your answer"></textarea>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={submitAnswer}>Submit Answer</button>
      </div>

      <div id="evaluationSection" style={{ display: "none" }}>
        <p id="evaluationText"></p>
      </div>
    </div>
  );
};

export default InterviewPage;

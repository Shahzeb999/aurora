import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory hook for navigation
import { motion } from "framer-motion";
import { Box, Flex, Text, Button, FormControl, Input } from "@chakra-ui/react";
import { PrimaryButton } from "../components/Buttons";

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory(); // Initialize useHistory hook

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
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        // Navigate to the interview page
        history.push('/interview');
      })
      .catch(error => {
        console.error('Error submitting file:', error);
        // Handle error as needed
      });
    } else {
      alert('Please upload a PDF file.');
    }
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
             </Flex>
             <Flex justify="center">
                 <Button colorScheme="blue" mr={3} onClick={handleInterview}>Start Interview</Button>
                   </Flex>
           </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Demo;

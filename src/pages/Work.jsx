import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text, Image, Button, FormControl, FormLabel, Input, Checkbox } from "@chakra-ui/react";
import { PrimaryButton } from "../components/Buttons";
import aurora from "../assets/projects/aurora.png";
import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";
import useColorSwitcher from "../utils/useColorSwitcher";

const Work = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { colorDark } = useColorSwitcher();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert('Please upload a PDF file.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('File submitted:', selectedFile);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box mt={{ base: "4em", md: "8em" }} px={{ base: "0", md: "20", xl: "0" }}>
        <Flex justifyContent="center">
          <Box w="100%" textAlign={{ base: "center", md: "left" }}>
            <Flex
              flexDir="column"
              justifyContent="space-around"
              minH={{ base: "500px", lg: "500px" }}
              alignItems={{ sm: "center", lg: "flex-start" }}
            >
              <Text
                color={colorDark}
                fontFamily="Space Mono, monospace"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="bold"
                mb={4}
              >
                The best engineers in the world choose Aurora
              </Text>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" mb={3} />
                <FormLabel>Age</FormLabel>
                <Input type="number" placeholder="Enter your age" mb={3} />
                <FormLabel>Sex</FormLabel>
                <Input type="text" placeholder="Enter your gender" mb={3} />
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email" mb={3} />
                <Checkbox defaultChecked mb={3}>Check me out</Checkbox>
                <Button colorScheme="blue" mr={3}>Submit</Button>
              </FormControl>
              <PrimaryButton>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload your resume
                  <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} style={{ display: 'none' }} />
                </label>
              </PrimaryButton>
              {selectedFile && <Text mt={2}>File ready to be submitted: {selectedFile.name}</Text>}
            </Flex>
          </Box>
          <Flex
            width={{ lg: "20rem", xl: "30rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
          >
            <Box maxW="500px">
              <Image src={aurora} alt="aurora logo" w="100%" h="auto" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Work;

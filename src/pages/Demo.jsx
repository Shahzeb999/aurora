import React from "react";
import {useState, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../Earth";
import { motion } from "framer-motion";
import {  Box,Center, Flex, Text, Image, Button, FormControl, FormLabel, Input, Checkbox} from "@chakra-ui/react";
import { Body,Heading0, Heading1, Heading2, TextLarge ,Heading3, Heading4} from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useColorSwitcher from "../utils/useColorSwitcher";

const Demo = () => {
  const { colorDark, secondary } = useColorSwitcher();
  const [selectedFile, setSelectedFile] = useState(null);

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
    window.location.href = 'http://127.0.0.1:4000';
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
              <Heading0>
                Aurora
              </Heading0>
              
              <Body
                w={{ base: "80%", xl: "40%" }}
                bg={{
                  base: "red.200",
                  xs: "yellow.200",
                  sm: "blue.200",
                  md: "green.200",
                }}
                fontWeight="bold"
              >
               <br>
               </br>
               Enter the Domain
              </Body>
              <br>
               </br>
               <FormControl>
                {/* <FormLabel>Enter the Domain</FormLabel> */}
                <Input type="text" placeholder="Enter the domain you want to give interview" mb={3} />
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
          <Center
          width={{ lg: "20rem", xl: "65rem" }}
          height={{ lg: "40rem", xl: "45rem" }}
          display={{ base: "none", lg: "block" }}
          mt="0"
        >
          <Canvas style={{ height: '100vh' }}>
            <ambientLight />
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <Earth/>
              <Environment preset='sunset'/>
              <ContactShadows position={[0,0,0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color="#000000" />
            </Suspense>
          </Canvas>
        </Center>
      </Flex>
    </Box>
  </motion.div>
  );
};
export default Demo;

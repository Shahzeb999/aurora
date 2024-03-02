
// import React from "react";
// import RobotModel from "../RobotModel";
// import { motion } from "framer-motion";
// import { Box, Center, Flex, Text,Image } from "@chakra-ui/react";
// import { Body,Heading0, Heading1, Heading3, Heading4} from "../components/Typography";
// import { PrimaryButton } from "../components/Buttons";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Float } from "@react-three/drei";
// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import useColorSwitcher from "../utils/useColorSwitcher";

// const Homepage = () => {
//   const navigate = useNavigate();
//   const { colorDark, secondary } = useColorSwitcher();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1, ease: "easeInOut" }}
//       exit={{ opacity: 0 }}
//     >
//       <Box
//         as="div"
//         mt={{ base: "4em", md: "8em" }}
//         px={{ base: "0", md: "20", xl: "0" }}
//       >
//         <Flex justifyContent="center">
//           <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
//             <Flex
//               flexDir="column"
//               justifyContent="space-around"
//               h={{ base: "500", lg: "500" }}
//               alignItems={{ sm: "center", lg: "flex-start" }}
//             >
//               <Heading0>
//               Onboard your global
//               team in 
//               </Heading0>
              
//               <Heading4 big={true} color={secondary}>
//                 day, hours, minutes , seconds
//               </Heading4>

//               <Body
//                 w={{ base: "80%", xl: "40%" }}
//                 bg={{
//                   base: "red.200",
//                   xs: "yellow.200",
//                   sm: "blue.200",
//                   md: "green.200",
//                 }}
//                 fontWeight="bold"
//               >
//                <br>
//                </br>
//                Aurora is a better way to hire. We're an AI-powered platform that sources, vets, and pays your next employees
//               </Body>
//               <br>
//                </br>
//                <PrimaryButton
//                 onClick={() => handleNavigate('/team')} 
//                 theme={secondary}
//                 mt={4}
//               >
//                 Hire a team
//               </PrimaryButton>
//               <PrimaryButton
//                 onClick={() => handleNavigate('/schedule')} 
//                 theme={secondary}
//                 mt={4}
//               >
//                 Book a meeting
//               </PrimaryButton>
//             </Flex>
//           </Box>
//           <Center
//             width={{ lg: "20rem", xl: "30rem" }}
//             height={{ lg: "40rem", xl: "45rem" }}
//             display={{ base: "none", lg: "block" }}
//             mt="0"
//           >
//             <Canvas>
//               <OrbitControls />
//               <ambientLight />
//               <Float speed="4.0" floatIntensity="2">
//                 <RobotModel />
//               </Float>
//             </Canvas>
//           </Center>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// export default Homepage;
//About 

import React from "react";
import RobotModel from "../RobotModel";
import { motion } from "framer-motion";
import { Box, Center, Flex, Text,Image, Grid } from "@chakra-ui/react";
import { Body,Heading0, Heading1, Heading3, Heading4} from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useColorSwitcher from "../utils/useColorSwitcher";
import { } from "@chakra-ui/react";
import IconBox from "../components/miscellaneous/IconBox";
import { Heading2 } from "../components/Typography";
import SectionHeader from "../components/miscellaneous/SectionHeader";
  
import {
  IconC,
  IconFB,
  IconJS,
  IconNode,
  IconPython,
  IconReact,
  IconGit,
  IconYolo,
  IconOpenCV,
  IconJava,
  IconAndroid,
  IconPHP,
  IconSQL,
  IconPostman,
  IconGoogleCloud,
  IconTensorFlow,
  IconJupyterNotebook,
} from "../assets/icons";

const Homepage = () => {
  const navigate = useNavigate();
  const { colorDark, secondary } = useColorSwitcher();

  const handleNavigate = (path) => {
    navigate(path);
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
              Onboard your global
              team in 
              </Heading0>
              
              <Heading4 big={true} color={secondary}>
                day, hours, minutes , seconds
              </Heading4>

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
               Aurora is a better way to hire. We're an AI-powered platform that sources, vets, and pays your next employees
              </Body>
              <br>
               </br>
               <PrimaryButton
                onClick={() => handleNavigate('/team')} 
                theme={secondary}
                mt={4}
              >
                Hire a team
              </PrimaryButton>
              <PrimaryButton
                onClick={() => handleNavigate('/demo')} 
                theme={secondary}
                mt={4}
              >
                Take a Demo
              </PrimaryButton>
            </Flex>
          </Box>
          <Center
            width={{ lg: "20rem", xl: "30rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
          >
            <Canvas>
              <OrbitControls />
              <ambientLight />
              <Float speed="4.0" floatIntensity="2">
                <RobotModel />
              </Float>
            </Canvas>
          </Center>
        </Flex>
      </Box>
    </motion.div>
  );
};

const Skills = ({ ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        {...props}
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="50px">
          <SectionHeader mr="16px">
            <Heading2>Skills</Heading2>
          </SectionHeader>
        </Box>
        <Text
          pb="1em"
          fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
          textAlign="center"
        >
          Technologies & Tools I Used
        </Text>
        <Grid
          mx="auto"
          py="5em"
          w={{ base: "100%", lg: "90%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          border="1px solid"
          gap={{ base: 8, md: 16 }}
          placeItems="center"
        >
          <Languages />
          <Frameworks />
          <ComputerVision />
          <Tools />
        </Grid>
      </Box>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <>
      <IconBox
        icon={IconC}
        name="C++"
        size={{ base: "3em", xl: "5.5em" }} />
      <IconBox
        icon={IconJS}
        name="JavaScript"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconPython}
        name="Python"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconJava}
        name="Java"
        size={{ base: "3em", xl: "5.5em" }}
      />}
    </>
  );
};
const Frameworks = () => {
  return (
    <>
      <IconBox
        icon={IconNode}
        name="NodeJS"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconReact}
        name="React"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconAndroid}
        name="Android"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconReact}
        name="React-Native"
        size={{ base: "3em", xl: "5.5em" }}
      />}
    </>
  );
};

const Tools = () => {
  return (
    <>
      <IconBox
        icon={IconFB}
        name="Firebase"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconPostman}
        name="Postman"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconSQL}
        name="SQL"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconPHP}
        name="PHP"
        size={{ base: "3em", xl: "5.5em" }}
      />}
    </>
  );
};

const ComputerVision = () => {
  return (
    <>
      <IconBox
        icon={IconYolo}
        name="Yolo"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconOpenCV}
        name="OpenCV"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconJupyterNotebook}
        name="JupyterNotebook"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {
        <IconBox
          icon={IconGit}
          name="Git"
          size={{ base: "3em", xl: "5.5em" }} />
      }
    </>
  );
};


// Existing imports and components...

const HomeAndSkills = () => {
  return (
    <>
      <Homepage />
      <Skills />     
    </>
  );
};

export default HomeAndSkills;


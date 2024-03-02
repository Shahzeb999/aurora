import React, { useState } from "react";
import { motion } from "framer-motion";
import aurora from "../assets/projects/aurora.png";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
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
              <Text
                color={colorDark}
                fontFamily="Space Mono, monospace"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="bold"
              >
                The best engineers in the world choose Aurora
              </Text>
              <Body
                w={{ base: "80%", xl: "70%" }}
                fontWeight="bold"
              >
                Our engineers keep coming back because they love working for Aurora's clients.
                <br />
                Opportunities: One application to Aurora gets instantly considered by hundreds of companies so you don't have to submit 100 applications.
                <br />
                Compensation: Aurora companies are predominantly located in Silicon Valley, offering many of the most exciting tech jobs in the world.
                <br />
                Remote work: Enjoy your work from anywhere as you settle in to a remote-first global culture at one of Aurora's partners.
              </Body>
              <PrimaryButton>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Upload your resume
                    <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} />
                  </label>
                </form>
              </PrimaryButton>
              {selectedFile && <p>File ready to be submitted: {selectedFile.name}</p>}
            </Flex>
          </Box>
          <Flex
            width={{ lg: "20rem", xl: "30rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
          >
            <Box maxW="500px">
              <Image
                src={aurora}
                alt="aurora logo"
                w="100%"
                h="auto"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </motion.div>      
  );
};

export default Work;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import aurora from "../assets/projects/aurora.png";
// import { Box, Flex,Center, Text,Image } from "@chakra-ui/react";
// import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";
// import { PrimaryButton } from "../components/Buttons";
// import useColorSwitcher from "../utils/useColorSwitcher";

// const Work = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const { colorDark, secondary } = useColorSwitcher();
  
//     const handleFileChange = (event) => {
//       // Assuming only one file is uploaded, access the first file in the array
//       const file = event.target.files[0];
//       if (file && file.type === "application/pdf") {
//         setSelectedFile(file);
//         // You can also perform file upload here or in a separate function
//       } else {
//         alert('Please upload a PDF file.');
//       }
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       if (selectedFile) {
//         console.log('File submitted:', selectedFile);
//       }
//     };

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
//               <Text
//                 color={colorDark}
//                 fontFamily="Space Mono, monospace"
//                 fontSize={{ base: "24px", md: "32px" }}
//                 fontWeight="bold"
//               >
//                  The best engineers in the world choose Aurora
//               </Text>
//               {/* <Heading2 big={true}>
//                 Adnaan
              
//               </Heading2> */}

//               {/* <Heading3 big={true} color={secondary}>
//                 Learning Everything
//               </Heading3> */}

//               <Body
//                 w={{ base: "80%", xl: "70%" }}
//                 bg={{
//                   base: "red.200",
//                   xs: "yellow.200",
//                   sm: "blue.200",
//                   md: "green.200",
//                 }}
//                 fontWeight="bold"
//               >
// <br>

// </br>
//              Our engineers keep coming back because they love working for Aurora's clients.
//                 <br />
//                 Opportunities: One application to Aurora gets instantly considered by hundreds of companies so you don't have to submit 100 applications.
//                 <br />
//                 Compensation: Aurora companies are predominantly located in Silicon Valley, offering many of the most exciting tech jobs in the world.
//                 <br />
//                 Remote work: Enjoy your work from anywhere as you settle in to a remote-first global culture at one of Aurora's partners.

//               </Body>
//               <PrimaryButton>
//               <form onSubmit={handleSubmit}>
//                   <label htmlFor="file-upload" className="custom-file-upload">
//                     Upload your resume
//                     <input id="file-upload" type="file" accept=".pdf" onChange={handleFileChange} />
//                   </label>
//                 </PrimaryButton>
//               </form>
//               {selectedFile && <p>File ready to be submitted: {selectedFile.name}</p>}

//             </Flex>
//             </Box>

//             <Center
//             width={{ lg: "20rem", xl: "30rem" }}
//             height={{ lg: "40rem", xl: "45rem" }}
//             display={{ base: "none", lg: "block" }}
//             mt="0"
//             >

//                 <Box maxW="500px">
//                   <Image
//                     src={aurora}
//                     alt="aurora logo"
//                     w="100%"
//                     h="auto"
//                   />
//                 </Box>
//             </Center>
//           </Flex>
//        </Box>
//      </motion.div>      
//   );
// };

// export default Work;

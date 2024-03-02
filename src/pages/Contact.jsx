import React from "react";

import { motion } from "framer-motion";
import { Box, Flex, Grid } from "@chakra-ui/react";

import SectionHeader from "../components/miscellaneous/SectionHeader";

import { PrimaryButton } from "../components/Buttons";
import { Heading2, TextLarge } from "../components/Typography";
import IconBox from "../components/miscellaneous/IconBox";
import {
  IconGithub,
  IconInstagram,
  IconKaggle,
  IconLeetcode,
  IconLinkedin,
  IconTwitter,
} from "../assets/icons";

import useColorSwitcher from "../utils/useColorSwitcher";

const Contact = ({ ...props }) => {
  const { secondary } = useColorSwitcher();

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
        my="4em"
        {...props}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="72px">
          <SectionHeader mr="16px">
            <Heading2>Contact</Heading2>
          </SectionHeader>
        </Box>
        <Box
          mx="auto"
          w={{ base: "90%", xl: "60%" }}
          display="grid"
          placeItems="center"
        >
          <TextLarge mb="32px" align="center">
            I'm currently open to learning and actively looking for full-time
            Internship & job  opportunties, so if you like what you've seen please don't
            hesitate to get in touch!
          </TextLarge>
          <TextLarge mb="64px" align="center">
          If you have inquiries or wish to initiate a conversation, please feel free to reach out to me via my inbox. I assure you of my commitment to promptly respond at the earliest convenience.
          </TextLarge>
          <Flex
            justifyContent="space-evenly"
            alignItems="center"
            width="100%"
            flexDirection={{ sm: "column", md: "row" }}
          >
            <PrimaryButton
              as="a"
              href="mailto:iamadnaanmohd21@gmail.com"
              theme={secondary}
              mt={4}
            >
              GET IN TOUCH
            </PrimaryButton>
            <PrimaryButton
              as="a"
              href="https://drive.google.com/file/d/1QuomRfM_iRewEe7g59rdRU5UUZBcnZd7/view?usp=sharing"
              theme={secondary}
              mt={4}
              target="_blank"
            >
              RESUME
            </PrimaryButton>
          </Flex>
        </Box>
        <Grid
          mt="3em"
          mx="auto"
          w={{ base: "100%", lg: "70%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={{ base: 8 }}
          placeItems="center"
          pb="3em"
        >
          <IconBox
            icon={IconLinkedin}
            link="https://www.linkedin.com/in/mohammad-adnaan-51272024a/"
            size="3em"
            name="Linkedin"
          />
          <IconBox
            icon={IconGithub}
            link="https://github.com/mohd-adnaan"
            size="3em"
            name="Github"
          />
          <IconBox
          icon={IconTwitter}
          link="https://twitter.com/callmeadnaan19"
          size="3em"
          name="Twitter"
          />
          <IconBox
            icon={IconLeetcode}
            link="https://leetcode.com/Mohd_Adnaan/"
            size="3em"
            name="Leetcode"
          />
          <IconBox
            icon={IconInstagram}
            link="https://www.instagram.com/adnaan.this.side/"
            size="3em"
            name="Instagram"
          />
          <IconBox
            icon={IconKaggle}
            link="https://www.kaggle.com/adnaanthisside"
            size="3em"
            name="Kaggle"
          />

        
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Contact;

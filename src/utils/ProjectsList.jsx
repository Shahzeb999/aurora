import React from "react";
import {
  PortfolioProject,
  TechQuizzes,
  DAC,
  MapIn,
  TTT,
  ParkEaze,
  DataBird,
  Kisaan,
  FloatingPiano,
  Diabetic_Blindness_Detection,
  ImageSegmentation,
  Grow,
  Echo,
  AINavigatioo,
} from "../assets/projects";
import EchoVideo from "../assets/projects/EchoVideo.mp4";
import ProjectImage from "../components/miscellaneous/ProjectImage"
const ProjectsList = [
  {
    name: "Portfolio Website",
    info: [
      "Built with React, framer motion and Chakra UI.",
      "Supports light and dark mode,",
      "Updating as My Profile Improves",],
    media: <ProjectImage src={PortfolioProject} type="gif" />,
    live: "https://adnaanonline.vercel.app/",
    repo: "https://github.com/mohd-adnaan/AdnaanOnline",
  },
  {
    name: "DAC(Digital Address Code)",
    info: [
      "A cross-platform app built using React-native developed by me, during the Internship period at Indian Space Research Organization ",
      "An app for returning the DAC of the current and marked location of the user on the Indian Map along with building Contours",
      "Uses React-native, Postgres ,Node and PhP",
    ],
    media: <ProjectImage src={DAC} type="gif" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/DAC",
  },
  {
    name: "Grow",
    info: [
      "Your personalized horticultural companion: A Plant Recommendation System tailored to users' locations and individual preferences.",
      "This application recommends plants based on the user's current or selected location on the Indian Map. Additionally, it aids users in identifying plants by name or through images. ",
      "The technology stack employed includes React Native, JavaScript,Firestore, TensorFlow, QGIS, MySql database, Node.js, Express, PHP, Java, and Python",
      "My Minor Project for 3rd Year Computer Engineering",
    ],
    media: <ProjectImage src={Grow} type="gif" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/Grow",
  },
  {
    name: "Tech-Quizzes",
    info: [
      "A web app designed for tech-savvy individuals to assess their programming knowledge and enhance their learning by fearlessly tackling multiple-choice questions (MCQs).",
      "One can practice as many as 1200+ questions.",
      "Learning and Innovation. "
    ],
    media: <ProjectImage src={TechQuizzes} type="gif" />,
    live: "https://techquizzes.vercel.app/",
    repo: "https://github.com/mohd-adnaan/Tech-Quizzes",
  },
 
   {
     name: "ParkEaze",
     info: [
       "A Machine Learning Project for detecting available parking slots in real time.",
       "Jupyter NoteBook",
       "OpenCV",
     ],
     media: <ProjectImage src={ParkEaze} type="gif" />,
     live: null,
     repo: "https://github.com/mohd-adnaan/ParkEaze",
   },
   {
    name: "Echo Music Player",
    info: [
      "Echo Music Player- Offline Music is an offline music player app designed using open source code. It has an attractive Visualizer which suits best on pop songs.",
      "Offline music also has a feature to Favorite a particular song so as to add it in Favorite library which enables a user to easily access and play their most liked songs",
      "A 'Shake to Change' feature which when enabled changes the song just by shaking the mobile",
      "The technology stack employed includes Kotlin, Android Studio, JavaScript, MySql database, Node.js, Express, PHP, Java, and Python",
    ],
    media: <ProjectImage src={Echo} type="gif" />,
    live: null,
    repo: null,
  }, 
  {
    name: "SegFormer For Semantic Segmentation",
    info: [
      "This repository contains a notebook where I fine-tuned the SegFormerForSemanticSegmentation model on a custom semantic segmentation dataset called RUGD.",
      "The objective of the model is to assign a specific label to each pixel in an image from a predefined list of classes.",
      "Implementation of the Paper: 'SegFormer : Simple and Efficient Design for Semantic  Segmentation with Transformer' ",
      // "The model is initialized with weights pre-trained on the ImageNet-1k dataset and further fine-tuned along with the decoder head, which begins with randomly initialized weights.",
    ],
    media: <ProjectImage src={ImageSegmentation} type="gif" />,

    live: null,
    repo: "https://github.com/mohd-adnaan/SementicSegmentation",
  },
  {
    name: "Floating Piano",
    info: [
      "Floating Piano is a computer vision based project that allows you to play a virtual piano through hand-gesture.",
      "The hand is detected using the the black color mask we created using the HSV scale.",
      "After the hand is detected, we draw a convex hull, to find the surrounding convex polygon. From this polygon we extract the finger-tips using the convexity defects function. "
    ],
    media: <ProjectImage src={FloatingPiano} type="gif" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/flaotingPiano",
  },
  {
    name: "Kisaan",
    info: [
      "An app for the Dissemination of Agromet Advisory Services to take decisions in day-to-day farm operation by farmers.",
      "Uses React-native,Java-Script, Java,C++,Objective C++ , Postgres, and PhP",
      "Design and Develop by NRSC,ISRO,India as a Reseach & Mobile Developer Intern."
    ],
    media: <ProjectImage src={Kisaan} type="gif" />,
    //live : "https://docs.google.com/document/d/1tPbji7SMzDDeHS1U0BJB22zcux5G5zOtqoGtUfCgxmc/edit?usp=sharing",
    live: null,
    repo: "https://github.com/mohd-adnaan/Kisaan",
  },
   {
    name: "MapIn",
    info: [
      "An app for Marking and drawing shapes on a location of the Indian Map.",
      "Uses React-native,Java-Script, Java,C++,Objective C++ , Postgres, and PhP",
    ],
    media: <ProjectImage src={MapIn} type="gif" />,
    //live : "https://docs.google.com/document/d/1tPbji7SMzDDeHS1U0BJB22zcux5G5zOtqoGtUfCgxmc/edit?usp=sharing",
    live: null,
    repo: "https://github.com/mohd-adnaan/Map_In",
  },
   
  {
    name: "AI-Tic-Tac-Toe",
    info: [
      "This project implements a Tic-tac-toe game where you can play against an AI that uses the Minimax algorithm to make its moves.",
      "In this project, you can play against an AI that is designed to make optimal moves using the Minimax algorithm, ensuring a challenging game.",
    ],
    media: <ProjectImage src={TTT} type="gif" />,
    live: "https://ai-tic-tac-toe-tau.vercel.app/",
    repo: "https://github.com/mohd-adnaan/AI-Tic-Tac-Toe",
  },

  {
    name:"Diabetic Blindness Detection",
    info:
    [
    "Diabetic Retinopathy is an eye-condition developed in patients with diabetics that gradually turn into blindness.",
    "This is a code implementation of the paper - 'Diabetic Retinopathy Detection using Texture Features and Ensemble Learning.' " ,
    ],
    media: <ProjectImage src={Diabetic_Blindness_Detection} type=".jpeg" style={{ maxWidth: "100%", maxHeight: "100%" }}  />,
    live: "https://doi.org/10.1109/TENSYMP50017.2020.9230600",
    repo: "https://github.com/mohd-adnaan/Diabetic_Blindness_Detection",
  },
  {
    name: "Data-Bird",
    info: [
      "Data Bird | HTML5, CSS, JavaScript, Eel, Python, XML, AWS, GIT, MySQL",
      " Data Bird is a software that will help you with all your data driven tasks",
      " It brings Data mining, Task scheduling and price tracking all together on a GUI based no-code platform",
      " Distinguished features: Data Scraping, Price Tracking, Data APIs, Data Storage, Data Visualization",
    ],
    media: <ProjectImage src={DataBird} tpye="gif" />,
    live: "https://databirdservices.com",
    repo: "https://github.com/mohd-adnaan/Data-Bird",
  },

  
];

export default ProjectsList;

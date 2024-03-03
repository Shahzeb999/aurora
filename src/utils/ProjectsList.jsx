import React from "react";
import { person1 } from "../assets/projects";
import ProjectImage from "../components/miscellaneous/ProjectImage";

const ProjectsList = [
  {
    name: "John Doe",
    info: [
      "Experience: 5 years",
      "Skills: Java, SQL, JavaScript",
      "Expertise: Backend Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Jane Smith",
    info: [
      "Experience: 8 years",
      "Skills: Python, Django, HTML/CSS",
      "Expertise: Full Stack Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/"
  },
  {
    name: "Alex Johnson",
    info: [
      "Experience: 3 years",
      "Skills: C++, .NET, Angular",
      "Expertise: Frontend Development"
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/"
  },
  {
    name: "Emily White",
    info: [
      "Experience: 6 years",
      "Skills: PHP, Laravel, MySQL",
      "Expertise: Web Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Sarah Miller",
    info: [
      "Experience: 7 years",
      "Skills: Jupyter Notebook, JavaScript, React, Node.js, OpenCV",
      "Expertise: Full Stack Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Mike Brown",
    info: [
      "Experience: Mike Brown",
      "Skills: JavaScript, React, Node.js",
      "Expertise: UI/UX Design",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Sarah Mille",
    info: [
      "Experience: 7 years",
      "Skills: Java, Spring Boot, MongoDB",
      "Expertise: Software Engineering",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Chris Davis",
    info: [
      "Experience: 2 years",
      "Skills: Python, Flask, SQLAlchemy",
      "Expertise: Backend Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Olivia Wilson",
    info: [
      "Experience: 9 years",
      "Skills: C++, OpenGL, Unity",
      "Expertise: Game Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Daniel Lee",
    info: [
      "Experience: 5 years",
      "Skills: Ruby, Rails, PostgreSQL",
      "Expertise: Web Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Mia Garcia",
    info: [
      "Experience: 3 years",
      "Skills: JavaScript, Vue.js, Firebase",
      "Expertise: Backend Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
  {
    name: "Hakkim",
    info: [
      "Experience: 2 years",
      "Skills: Ruby, Rails, PostgreSQL",
      "Expertise: Full Stack Development",
    ],
    media: <ProjectImage src={person1} />,
    live: "https://www.linkedin.com/feed/",
  },
];

export default ProjectsList;

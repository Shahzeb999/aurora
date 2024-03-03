import React from "react";
import { Container } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Team from "./pages/Team";
import Demo from "./pages/Demo";
import Work from "./pages/Work";
import Navbar from "./components/Navbar/Navbar";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="/demo" element={<Demo/>} />
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
      >
        <Container
          maxW={{ sm: "container.sm", md: "container.lg", lg: "container.xl" }}
        >
          <Navbar />
          <AnimatedRoutes />
        </Container>
      </motion.div>
    </>
  );
}

export default App;

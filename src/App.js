import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import logo from "./Aurora.png";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setLogoAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <AnimatePresence>
            {showLogo && (
              <motion.img
                src={logo}
                alt="Aurora Logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ width: '150px', height: 'auto' }} 
              />
            )}
          </AnimatePresence>
        </header>
        <Routes>
          {logoAnimationComplete && <Route path="/" element={<HomePage />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

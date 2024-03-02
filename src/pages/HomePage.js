import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  // Animation variants for the motion component
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Welcome to Aurora.ai</h1>
        <p>An AI powered interview and feedback platform.</p>
        <motion.button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
          }}
          variants={buttonVariants}
          whileHover="hover"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomePage;

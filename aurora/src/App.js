import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import InterviewPage from './components/InterviewPage';
import WhyAurora from './components/WhyAurora';
import SignUp from './components/SignUp'; // Import SignUp component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-aurora" element={<WhyAurora />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

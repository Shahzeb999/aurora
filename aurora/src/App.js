import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;

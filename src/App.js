import React from 'react';
import NavBar from './pages/NavBar';
import AnnouncementBar from './pages/AnnouncementBar';
import Header from './pages/Header';
import Feature from './pages/Feature';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnnouncementBar />
      <Header />
      <main className="main-content">
        <Feature 
          title="Seamless Integration" 
          description="Integrate Aurora seamlessly with your existing HR systems for a smooth workflow."
        />
        <Feature 
          title="Intelligent Matching" 
          description="Our AI-powered bot evaluates candidates to match them with the perfect opportunities."
        />
        <Feature 
          title="Analytics Dashboard" 
          description="Get insights into your hiring process with our comprehensive analytics dashboard."
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// src/components/InterviewComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const InterviewComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const generateQuestions = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate_questions', {
        // Add any necessary data for generating questions
      });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating questions:', error);
    }
  };

  const validateAnswers = async () => {
    try {
      const response = await axios.post('http://localhost:5000/validate_answers', {
        questions: questions,
        answers: answers,
      });
      console.log('Validation Result:', response.data);
    } catch (error) {
      console.error('Error validating answers:', error);
    }
  };

  return (
    <div>
      <button onClick={generateQuestions}>Generate Questions</button>
      <div>
        <h3>Questions</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Enter Answers</h3>
        <textarea value={answers} onChange={(e) => setAnswers(e.target.value)} />
      </div>
      <button onClick={validateAnswers}>Validate Answers</button>
    </div>
  );
};

export default InterviewComponent;

import React, { useState, useEffect } from 'react';
import '../InterviewPage.css'; // Updated import path

window.addEventListener('error', (event) => {
  const { message, error } = event;
  if (message === 'ResizeObserver loop completed with undelivered notifications') {
    event.preventDefault();
    console.error('ResizeObserver loop error suppressed:', error);
  }
});

const InterviewPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [domain, setDomain] = useState('');
  const [questionDisplay, setQuestionDisplay] = useState('none');
  const [answer, setAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [techQuestions, setTechQuestions] = useState([]);
  const [feedbacks, setFeedbacks] = useState({});
  const [evaluationDisplay, setEvaluationDisplay] = useState('none');
  const [interviewStarted, setInterviewStarted] = useState(false); // Track if the interview has started
  const [videoStream, setVideoStream] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    let videoElement = document.getElementById('video');
    let resizeObserver;

    const setupResizeObserver = () => {
      if (!videoElement) return;

      resizeObserver = new ResizeObserver(() => {
        if (videoElement.clientWidth === 0 && videoElement.clientHeight === 0) {
          // Video element is hidden, stop observing
          resizeObserver.disconnect();
        }
      });

      resizeObserver.observe(videoElement);
    };

    if (interviewStarted && videoElement && !videoStream) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoElement.srcObject = stream;
          setVideoStream(stream);
          setupResizeObserver(); // Start ResizeObserver
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
        });
    }

    // Cleanup function
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [interviewStarted, videoStream]);

  const startInterview = () => {
    if (!resume || domain.trim() === '') {
      alert('Please select a resume and enter a domain.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('domain', domain);

    fetch('http://localhost:5000/generate_resume_questions', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.questions && data.questions.length > 0) {
          setTechQuestions(data.questions);
          setInterviewStarted(true); // Interview started
          setQuestionDisplay('block');
          displayQuestion(); // Display first question immediately
        } else {
          console.error('No questions received.');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const displayQuestion = () => {
    if (currentQuestion < techQuestions.length) {
      document.getElementById('questionText').textContent = techQuestions[currentQuestion];
      setAnswer('');
    } else {
      submitTechAnswers();
    }
  };

  const submitAnswer = () => {
    if (answer.trim() === '') {
      alert('Please enter your answer.');
      return;
    }

    const updatedFeedbacks = { ...feedbacks };
    updatedFeedbacks[techQuestions[currentQuestion]] = answer;

    setFeedbacks(updatedFeedbacks);
    setCurrentQuestion(currentQuestion + 1);
    displayQuestion();
  };

  const submitTechAnswers = () => {
    fetch('http://localhost:5000/validate_resume_responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        questions: techQuestions,
        answers: Object.values(feedbacks),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
        setEvaluationDisplay('block');
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="interview-container">
      <div id="uploadSection" style={{ display: interviewStarted ? 'none' : 'block' }}>
        <h3>Submit your details</h3>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
        <input type="text" placeholder="Enter Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
        <button onClick={startInterview}>Start Interview</button>
      </div>

      <div className="videoSection" style={{ display: videoLoaded ? 'block' : 'none' }}>
        <video
          id="video"
          autoPlay
          onLoadedData={() => setVideoLoaded(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="questionSection" style={{ display: questionDisplay }}>
        <p id="questionText"></p>
        <textarea id="answerInput" placeholder="Your answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button onClick={submitAnswer}>Submit Answer</button>
      </div>

      <div className="evaluationSection" style={{ display: evaluationDisplay }}>
        <h3>Interview Results</h3>
        <p id="summaryText">Summary: {feedbacks.average_rating}</p>
        <p id="techScore">Tech Score: {feedbacks.tech_score}</p>
        <p id="resumeScore">Resume Score: {feedbacks.resume_score}</p>
        <p id="feedbacksText">Feedbacks: {feedbacks.feedbacks}</p>
      </div>
    </div>
  );
};

export default InterviewPage;

let currentQuestion = 0;
let questions = [];
let answers = [];

function uploadResume() {
    const resumeInput = document.getElementById('resumeInput');
    const domainInput = document.getElementById('domainInput');

    if (resumeInput.files.length == 0 || domainInput.value === "") {
        alert("Please select a resume and enter a domain.");
        return;
    }

    const formData = new FormData();
    formData.append('resume', resumeInput.files[0]);
    formData.append('domain', domainInput.value);

    fetch('/upload_resume', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        questions = data.questions;
        document.getElementById('uploadSection').style.display = 'none';
        document.getElementById('questionSection').style.display = 'block';
        displayQuestion();
    })
    .catch(error => console.error('Error:', error));
}

function displayQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('questionText').textContent = questions[currentQuestion];
    } else {
        submitAnswers();
    }
}

function submitAnswer() {
    const answerInput = document.getElementById('answerInput');
    answers.push(answerInput.value);
    answerInput.value = ''; // Clear the textarea
    currentQuestion++;
    displayQuestion();
}

function submitAnswers() {
    document.getElementById('questionSection').style.display = 'none';

    fetch('/evaluate_answers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({questions: questions, answers: answers}),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('evaluationSection').style.display = 'block';
        document.getElementById('evaluationText').textContent = data.evaluation;
    })
    .catch(error => console.error('Error:', error));
}

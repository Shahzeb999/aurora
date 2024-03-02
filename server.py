from flask import Flask, request, jsonify, render_template
from Bot import IntervueBot
from speech_services import TextToSpeech, AudioTranscriber
import os
import tempfile
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def hello():
    return render_template('index.html')

@app.route('/generate_speech', methods=['POST'])
def generate_speech():
    text_2_speech = TextToSpeech()
    audio_path = text_2_speech.generate_speech(request.get_json().get('text'))
    return audio_path

@app.route("/transcribe", methods=['POST'])
def transcribe():
    transcriber = AudioTranscriber()
    text = transcriber.transcribe_audio(request.get_json().get("audio_path"))
    return text

@app.route('/generate_resume_questions', methods=['POST'])
def generate_questions():
    # Check if resume file is present in the request
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file provided"}), 400

    resume_file = request.files['resume']

    # Check if the file is a PDF
    if resume_file.filename == '' or not resume_file.filename.endswith('.pdf'):
        return jsonify({"error": "Invalid resume file provided"}), 400

    # Use tempfile to get the temporary directory
    temp_dir = tempfile.gettempdir()
    filename = secure_filename(resume_file.filename)
    file_path = os.path.join(temp_dir, filename)  # Cross-platform path handling
    resume_file.save(file_path)

    # Initialize the IntervueBot with the resume file path
    domain = request.form.get('domain', 'default_domain')
    bot = IntervueBot(file_path, domain)
    questions = bot.generate_questions_from_resume()

    return jsonify(questions)

@app.route('/generate_tech_questions', methods=['POST'])
def generate_tech_questions():
    # Check if resume file is present in the request
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file provided"}), 400

    resume_file = request.files['resume']

    # Check if the file is a PDF
    if resume_file.filename == '' or not resume_file.filename.endswith('.pdf'):
        return jsonify({"error": "Invalid resume file provided"}), 400

    # Use tempfile to get the temporary directory
    temp_dir = tempfile.gettempdir()
    filename = secure_filename(resume_file.filename)
    file_path = os.path.join(temp_dir, filename)  # Cross-platform path handling
    resume_file.save(file_path)

    # Initialize the IntervueBot with the resume file path
    domain = request.form.get('domain', 'default_domain')
    bot = IntervueBot(file_path, domain)
    tech_questions = bot.generate_technical_questions()

    return jsonify(tech_questions)

@app.route('/validate_resume_responses', methods=['POST'])
def validate_answers_on_resume():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON data found"}), 400

    # Extract data from JSON
    resume_file = data.get('resume_file')
    domain = data.get('domain')
    questions = data.get('questions')
    answers = data.get('answers')

    # Check if resume file is present
    if not resume_file:
        return jsonify({"error": "No resume file provided"}), 400

    # Initialize the IntervueBot with the resume file path
    bot = IntervueBot(resume_file, domain)
    results = bot.validate_response(questions, answers)

    return jsonify(results)

@app.route('/validate_technical_responses', methods=['POST'])
def validate_technical_responses():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No JSON data found"}), 400

    # Extract data from JSON
    domain = data.get('domain')
    questions = data.get('questions')
    answers = data.get('answers')

    # Check if questions and answers are present
    if not questions or not answers:
        return jsonify({"error": "Questions or answers not provided"}), 400

    # Validate technical responses
    bot = IntervueBot(None, domain)  # Pass None for resume file and domain
    results = bot.validate_technical_answers(questions, answers)

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify, render_template, send_file, send_from_directory
from Bot import IntervueBot
from speech_services import TextToSpeech, AudioTranscriber
global bot
global text_2_speech
global transcriber
import os
from flask_cors import CORS 


import tempfile
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST','GET'])
def hello():
    return render_template('index.html')

@app.route('/demo')
def demo():
    return render_template('demo.html')

@app.route('/resume')
def resume(): 
    return render_template('resume.html')

@app.route('/generate_speech', methods=['POST'])
def generate_speech():
    print("Generate Speech called")
    text_2_speech = TextToSpeech()
    audio_obj = text_2_speech.generate_speech(request.get_json().get('text'))
    print("Generated the object : ", audio_obj)
    # Instead of returning send_file directly, use send_from_directory
    return send_from_directory(directory='./audio/', path='tts.mp3', as_attachment=False)

@app.route("/transcribe", methods=['POST'])
def transcribe():
    transcriber = AudioTranscriber()
    text = transcriber.transcribe_audio(request.get_json().get("audio_path"))
    return text

@app.route('/generate_resume_questions',methods=['POST'])
def generate_questions():
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file provided"}), 400
    file = request.files['resume']
    domain = request.form.get('domain', 'default_domain')

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Use tempfile to get the temporary directory
    temp_dir = tempfile.gettempdir()
    filename = secure_filename(file.filename)
    file_path = os.path.join(temp_dir, filename)  # Cross-platform path handling
    file.save(file_path)

    # Initialize your bot and generate questions
    global bot
    bot = IntervueBot(file_path, domain)
    questions = bot.generate_questions_from_resume()

    # Clean up
    # os.remove(file_path)

    return jsonify(questions)

@app.route('/generate_tech_questions',methods = ['POST'])
def generate_tech_questions(): 

    tech_questions = bot.generate_technical_questions()
    return tech_questions 

@app.route('/validate_resume_responses',methods = ['POST'])
def validate_answers_on_resume(): 
    data = request.get_json()
    if not data : 
        return "No JSON data found", 400 

    questions = data.get('questions')
    answers = data.get('answers')
    
    results = bot.validate_response(questions,answers)
    return jsonify(results)

@app.route('/validate_technical_responses',methods = ['POST'])
def validate_technical_responses(): 
    data = request.get_json()
    if not data : 
        return "No JSON data found", 400
    questions = data.get('questions')
    answers = data.get('answers')
    
    results = bot.validate_technical_answers(questions,answers)
    return jsonify(results)

@app.route('/review_resume', methods = ['POST'])
def review_resume(): 
    if 'resume' not in request.files:
        return jsonify({"error": "No resume file provided"}), 400
    file = request.files['resume']
    domain = request.form.get('domain')
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    # Use tempfile to get the temporary directory
    temp_dir = tempfile.gettempdir()
    filename = secure_filename(file.filename)
    file_path = os.path.join(temp_dir, filename)  # Cross-platform path handling
    file.save(file_path)

    global bot
    bot = IntervueBot(file_path, domain)
    feedback = bot.provide_feedback()
    return jsonify(feedback)

@app.route('/provide_summary_about_the_interview', methods = ['POST'])
def provide_summary(): 
    data = request.get_json()
    if not data : 
        return "No JSON data found", 400
    tech_score = data['tech_score']
    resume_score = data['resume_score']
    tech_feedbacks = data['tech_feedbacks']
    resume_feedback = data['resume_feedbacks']
    summary = bot.generate_summary_about_candidate(tech_score, resume_score, tech_feedbacks, resume_feedback)
    return jsonify(summary)



if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify
from Bot import IntervueBot
from speech_services import TextToSpeech, AudioTranscriber
global bot
global text_2_speech
global transcriber

app = Flask(__name__)

# @app.route('/hi', methods=['POST'])
# def hello(): 
#     try:
#         data = request.get_json()
#         text = data.get('text', 'default text')  # Using .get to provide a default value if 'text' is not present
#         return jsonify({"message": f'hi this is working {text}'})  # Correctly returning a JSON response
#     except Exception as e:
#         return jsonify({"error": str(e)}), 400  # Return a JSON error message

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

@app.route('/generate_resume_questions',methods=['POST'])
def generate_questions():
    data = request.get_json()  # This line parses the JSON data from the request
    if not data:
        return "No JSON data found", 400
    resume_path = data.get('resume_path')
    domain = data.get('domain')
    bot = IntervueBot(resume_path, domain)
    questions = bot.generate_questions_from_resume()

    return questions

@app.route('/generate_tech_questions',methods = ['POST'])
def generate_tech_questions(): 
    data = request.get_json()
    if not data: 
        return "No JSON data found", 400 
    resume_path = data.get('resume_path')
    domain = data.get('domain')
    tech_questions = bot.generate_technical_questions()
    return tech_questions 

@app.route('/validate_resume_responses',methods = ['POST'])
def validate_answers_on_resume(): 
    data = request.get_json()
    if not data : 
        return "No JSON data found", 400 
    resume_path = data.get('resume_path')
    domain = data.get('domain')
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

if __name__ == "__main__":
    app.run(debug=True)

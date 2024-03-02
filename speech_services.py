# tts.py
import os
from openai import OpenAI

class TextToSpeech:
    def __init__(self, model="tts-1", voice="alloy", output_path="./audio/tts.mp3"):
        self.client = OpenAI()
        self.model = model
        self.voice = voice
        self.output_path = output_path

    def generate_speech(self, text):
        response = self.client.audio.speech.create(
            model=self.model,
            voice=self.voice,
            input=text,
        )
        # Save the response to a file
        with open(self.output_path, "wb") as f:
            f.write(response.content)
        print(f"Audio content written to file '{self.output_path}'")

        return {"audio path":self.output_path}
    
    def play_audio(self):
        if os.path.exists(self.output_path):
            os.system(f"start {self.output_path}")
        else:
            print(f"File {self.output_path} does not exist.")

# audio_transcriber.py

class AudioTranscriber:
    def __init__(self, model="whisper-1"):
        self.client = OpenAI()
        self.model = model

    def transcribe_audio(self, audio_file_path):
        with open(audio_file_path, "rb") as audio_file:
            transcription = self.client.audio.transcriptions.create(
                model=self.model,
                file=audio_file
            )
        return {"text":transcription.text}



# combined usage
if __name__ == "__main__":
    # Text-to-Speech example
    tts = TextToSpeech(output_path="./audio/tts.mp3")
    mytext = "Hello, world!"
    tts.generate_speech(mytext)
    tts.play_audio()

    # Speech-to-Text example
    transcriber = AudioTranscriber()
    audio_file_path = "./audio/tts.mp3"
    transcription_text = transcriber.transcribe_audio(audio_file_path)
    print("Transcription Text:", transcription_text)

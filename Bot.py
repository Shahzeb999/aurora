# Resume keywords extraction system to generate questions for an interview...
import nltk 
import spacy 
import scipy 
import numpy
import sklearn 
import fitz # PyMUPDF 
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os


load_dotenv()

apikey = os.getenv("OPENAI_API_KEY")

class IntervueBot(): 
    def __init__(self,resume_path, domain): 
        self.resume_path = resume_path
        self.resume_text = self.read_pdf(resume_path)
        self.llm = ChatOpenAI()
        self.domain = domain 
    def read_pdf(self, resume_path):
        pdf = fitz.open(self.resume_path)
        text = ""
        for apage in pdf: 
            text+=apage.get_text()
        pdf.close()
        return text
    
    def generate_questions_from_resume(self, num_questions = 10):

        resume_question_template = ChatPromptTemplate.from_messages([
            ("system", f'''You are world class resume parser and an Interviewer, you are taking the interview of a candidate, your task is to generate {num_questions} highly intellectual questions from his resume given below, the question should be general as these will be based on the resume.
             *Note  : you need to seperate each question with the help of delimiter \n so that I can segregate the questions into a list.'''),
            ("user", "{input}")
        ])
        resume_question_chain = resume_question_template | self.llm
        generated_resume_questions = resume_question_chain.invoke({"input": f"{self.resume_text}"}).content
        generated_resume_questions_list = generated_resume_questions.split('\n')
        cleaned_resume_questions_list = [q for q in generated_resume_questions_list if q.strip()]
        return {"questions":cleaned_resume_questions_list}
    
    def validate_response(self, questions ,responses): 

        resume_answer_validator_template = ChatPromptTemplate.from_messages([
                            ("system", f'''You are a world class {self.domain} Interviewer, you are interviewing a candidate for an {self.domain} role, 
                                        the following question was asked to the Interviewee and the answer that he gave is mentioned, 
                                        your task is to rate the Interviewee answer on a scale of 1 to 10, so rate him wisely.
                                        
                                        Also, there is no need to be kind if the interviewwe answer is not upto the mark,
                                        you are totally free to deduct marks if the answer is very short, doesn\'t contain the entire details, etc.
                                        
                                        **Note: Follow the instruction given below while returning the rating and feedbacks. 
                             
                                        1. You need to give a score and the feedback on the answers 
                                        2. Ensure that the score and feedback are seperated by demiliter \n for easy segregation.
                                        3. Don't return the score in the format 'Score : 8/10' , just return the score as 8/10 or like that. 
                             
                                        4. Also, just return the score first followed by the feedback.'''),
                            ("user", "{qa_pair}")
                                ])

        self.llm.invoke('Rate the candidate on a scale of 1 to 10.')
        chain = resume_answer_validator_template | self.llm 
        total_rating = 0
        feedbacks = []

        for question, response in zip(questions, responses):
            qa_pair = f'Question: {question} \nAnswer: {response}'
            response_content = chain.invoke({"qa_pair": qa_pair}).content
            parts = response_content.split('\n', 1)
    
            if len(parts) == 2:
                rating_str, feedback = parts
            else:
                rating_str = '0'
                feedback = response_content

            rating = rating_str.split('/')[0]
            floatrating = float(rating)
            print(floatrating)
            total_rating+=floatrating 
            feedbacks.append(feedback)
        avg_rating = total_rating/(len(questions))
        return {"average_rating": avg_rating, "feedbacks" : feedbacks}
    


        
    def generate_technical_questions(self, num_questions = 10): 
        technical_question_generation = ChatPromptTemplate.from_messages([
                    ("system", f'''  You are a world-class technical interviewer specializing in {self.domain} roles. 
                                    You have before you the resume of a candidate applying for a {self.domain} position. 
                                    Your task is to generate a comprehensive list of {num_questions} technical interview questions that
                                    cover the breadth and depth of the algorithms, concept, 
                                    techniques in this domain.
                                    The questions should be technically in-depth, 
                                    requiring a thorough understanding of {self.domain} concepts,
                                    practices, and applications to answer them.

                                    Instructions:

                                    Ensure the questions are diverse, covering different aspects of {self.domain}.
                                    Include questions that allow the candidate to discuss their problem-solving approaches, innovation in tackling {self.domain} challenges, and contributions to successful outcomes.
                                    Avoid general or non-technical questions; focus solely on aspects that reveal the candidate's technical proficiency and depth in {self.domain} and related fields.
                                    Segregate the questions using the delimiter \n for easy identification and organization.
                                    
                                    Objective:
                                    Generate 10-15 in-depth technical questions that span the entire resume, ensuring a broad examination of the candidate's technical capabilities and achievements in machine learning
                                
                                    Note : Only generate the question and do not give any headings, seperate text, etc apart from the questions. 
                                    
                                '''),
                    ("user", "{resume_text}")
                ])
        tech_que_chain = technical_question_generation | self.llm 
        tech_questions = tech_que_chain.invoke({'resume_text': f"{self.resume_text}"}).content.split('\n')
        cleaned_tech_questions = [q for q in tech_questions if q.strip()]
        return cleaned_tech_questions
    

    def validate_technical_answers(self,questions, answers):
        response_validation_template = ChatPromptTemplate.from_messages([
            ("system", f'''You are a world-class technical interviewer specializing in {self.domain} roles. 
                        Given the question given to the candidate and thier response to the technical question, your task is to evaluate the response based on its accuracy, depth of knowledge, and relevancy to the question asked. Consider whether the response demonstrates a thorough understanding of {self.domain} concepts, practices, and applications.
                        
                        Instructions:
                        
                        - Assess if the answer is technically accurate and sufficiently detailed.
                        - Evaluate the candidate's problem-solving approach and innovation in addressing {self.domain} challenges.
                        - Determine if the response reflects the candidate's technical proficiency and depth in {self.domain} and related fields.
                        - Provide a validation score or feedback on the candidate's response.
                        
                        Note: Only provide the validation score, feedback both seperated by a \n for easy segregation 
                        and avoid adding any extraneous content.
                    '''),
            ("user", "{qa_pair}")
        ])

        chain = response_validation_template | self.llm
        total_rating = 0
        tech_feedbacks = []

        for question, answer in zip(questions, answers):
            tech_qa_pair = f'Question: {question} Response: {answer}'
            response_content = chain.invoke({'qa_pair': tech_qa_pair}).content
            try:
                rating_technical_str, feedback_technical = response_content.split('\n', 1)
                rating_technical = float(rating_technical_str)  # Convert rating to float
                total_rating += rating_technical
                tech_feedbacks.append(feedback_technical)
            except ValueError as e:
                print(f"Error processing response: {e}")
                total_rating+=5 # default rating in this case....


        # Ensuring we don't divide by zero
        if questions:
            avg_tech_rating = total_rating / len(questions)
        else:
            avg_tech_rating = 0

        return avg_tech_rating, tech_feedbacks
    

from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from langchain_openai import OpenAIEmbeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-large")

class Recommender():
    def __init__(self, all_responses, domain, query):
        self.all_responses = all_responses
        self.domain = domain
        self.query = query
    
    def text_to_string(self, responses):
        text = ""
        for response in responses:
            text = text + response + " "
        return text
    
    def calculate_cosine_similarity(self, embedding1, embedding2):
        # Reshape for compatibility
        embedding1 = embedding1.reshape(1, -1)
        embedding2 = embedding2.reshape(1, -1)
        return cosine_similarity(embedding1, embedding2)[0][0]
    
    def knn_cosine_similarity(self, query_embedding, sentence_embeddings, sentences, k=5):
        similarities = [
            (sentences[i], self.calculate_cosine_similarity(query_embedding, np.array(sentence_embedding)))
            for i, sentence_embedding in enumerate(sentence_embeddings)
        ]
        # Sort by similarity
        similarities.sort(key=lambda x: x[1], reverse=True)
        # Get top k
        nearest_neighbors = similarities[:k]
        return nearest_neighbors
    
    def get_neighbours(self):
        # Assuming you have vector_store and embeddings defined
        vector_store = [embeddings.embed_query(self.text_to_string(responses)) for responses in self.all_responses]
        
        # Get the embedding of the query sentence
        query_embedding = np.array(embeddings.embed_query(self.text_to_string(self.query)))

        # Perform KNN
        nearest_neighbors = self.knn_cosine_similarity(query_embedding, vector_store, self.all_responses, k=5)
        return nearest_neighbors


# # Instantiate the Recommender
# recommender = Recommender(all_responses, domain, query)

# # Get the nearest neighbors
# nearest_neighbors = recommender.get_neighbours()

# # Print the nearest neighbors
# print("Query Sentence:")
# print(query)
# print("\nNearest Neighbors:")
# for neighbor in nearest_neighbors:
#     print(neighbor[0], " - Similarity:", neighbor[1])
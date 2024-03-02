import openai
import base64 
import requests
from bs4 import BeautifulSoup 
import os 
import dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
dotenv.load_dotenv()


class vscraper: 
    def __init__(self,): 
        self.api_key = os.getenv("OPENAI_API_KEY")
        openai.api_key = self.api_key

        
    def take_screenshot(self, url, image_path='./screenshoted_images/screenshot.png'):
        chromedriver_path = './chromedriver-win64/chromedriver.exe'  # Ensure this path is correct

        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Ensures Chrome runs in headless mode
        chrome_options.add_argument("--disable-gpu")  # Disables GPU hardware acceleration
        chrome_options.add_argument("--no-sandbox")  # Bypass OS security model, WARNING: NOT RECOMMENDED FOR PRODUCTION
        chrome_options.add_argument("--disable-dev-shm-usage")  # Overcomes limited resource problems

        # Specify the path to ChromeDriver explicitly
        service = Service(executable_path=chromedriver_path)
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        driver.get(url)
        driver.save_screenshot(image_path)
        driver.quit()
        return image_path

    def encode_image(self, image_path):
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode('utf-8')
        
    def process_image_with_openai(self, encoded_image):
        headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {self.api_key}"
        }

        payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": "You are a world class webscraper and you are based on vision based scraping. You will be given an image and then based on the image you will be required to make a list of the items listed on the page and return them in a json format. Remember, you are only allowed to return the json file with some explanatory text along with it mentioning what you have scraped, dont return any uneccessary text. "
                },
                {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/jpeg;base64,{encoded_image}"
                }
                }
            ]
            }
        ],
        "max_tokens": 1000
        }

        response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)

        return response
    
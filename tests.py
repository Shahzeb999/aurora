from Bot import IntervueBot

bot = IntervueBot("C:\\Users\\asus\\Downloads\\ML Resume.pdf", 'Machine Learning')
q = bot.generate_technical_questions(num_questions=10)
print(q)

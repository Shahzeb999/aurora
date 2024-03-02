import streamlit as st
import matplotlib.pyplot as plt
import altair as alt
import pandas as pd
import numpy as np 

st.markdown("""
<style>
.big-font {
    font-size:20px !important;
    font-weight: bold;
}
.streamlit-button {
    margin: 5px;
    padding: 10px 24px;
    border-radius: 20px;
}
</style>
""", unsafe_allow_html=True)

col1, col2 = st.columns([12, 6])  


with col2:
    if st.button('Login/Signup'):
        st.write("Firebase Integration") 

with st.sidebar:
    st.title("Navigation")
    page = st.radio("Go to", ["Home", "Resources", "Mock Interviews", "Daily Challenges"])

    

with st.sidebar:
    st.title("Feedback")
    feedback_text = st.text_area("Share your feedback to help us improve:")
    if st.button("Submit Feedback"):
        st.write("Thank you for your feedback!")


st.markdown("<h1 style='text-align: center; margin-bottom: 20px;'>Frep.AI</h1>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; margin-bottom: 20px;'>Welcome to the next gen of interview prep and feedback.</p>", unsafe_allow_html=True)




# Display custom header
st.markdown("<h3 'style = text-align : left'> Your Dashboard</h3>", unsafe_allow_html=True)

n_test_given = np.random.randint(5, 11) 

df = pd.DataFrame({
    'x': range(1, n_test_given + 1),  # Test numbers starting from 1
    'y': [np.random.randint(0, 101) for _ in range(n_test_given)]  # Generate a random score for each test
}) # in production this would be quried from the database. ....


# Create an Altair chart
chart = alt.Chart(df).mark_line().encode(
    x=alt.X('x:O', axis=alt.Axis(title='Test Number', values=list(df['x']), labelAngle = 0)),  # 'O' denotes ordinal, which implies discrete steps
    y=alt.Y('y:Q', axis=alt.Axis(title='Score'))
).properties(title='Performance Chart')
# display the chart using Altair
st.altair_chart(chart, use_container_width=True)



st.markdown('<p class="big-font">Select the domain you wish to prepare yourself for.</p>', unsafe_allow_html=True)
st.write('\n')

# Row 1
col1, col2, col3, col4 = st.columns(4)

with col1:
    if st.button("Machine Learning"):
        difficulty_choice = st.radio("Select test difficulty" , ['Beginner', 'Easy', 'Intermediate', 'Advanced','Expert', 'Grand Master' ])
        if difficulty_choice == 'Beginner' : 
            st.write('You have selected beginner level interview prep.')
        elif difficulty_choice == 'Easy' : 
            st.write('You have selected easy level interview prep.')
        elif difficulty_choice == 'Intermediate' : 
            st.write('You have selected interme. level interview prep.')
        elif difficulty_choice == 'Advanced' : 
            st.write('You have selected adv. level interview prep.')
        elif difficulty_choice == 'Expert' : 
            st.write('You have selected exp. level interview prep.')
        elif difficulty_choice == 'Grand Master' : 
            st.write('You have selected GM. level interview prep.')

with col2:
    if st.button('Web Development'):
        st.write('Web Dev Logic.')

with col3:
    if st.button('Data Science'):
        st.write('DS Logic.')

with col4:
    if st.button('Quantitative Analysis'):
        st.write('Quant Analysis')

# Row 2
col5, col6, col7, col8 = st.columns(4)

with col5: 
    if st.button('App Development'):
        st.write('App Dev')

with col6: 
    if st.button('UI / UX'):  
        st.write('UIUX')


with col7: 
    if st.button('Cyber Security'):
        st.write('Cyber Sec')

with col8: 
    if st.button('Cloud Computing'):
        st.write('Cloud Computing')

# Row 3
col9, col10, col11, col12 = st.columns(4)

with col9:
    if st.button('DevOps'):
        st.write('Ddevops')

with col10:
    if st.button('Blockchain'):
        st.write('Block chain')

with col11:
    if st.button('Software Development'):
        st.write('SDE')

with col12:
    if st.button('Data Analytics'):
        st.write('DA prep')

# carousel_items = [
#     "<div class='carousel_item'><img src='https://via.placeholder.com/400' alt='Placeholder Image'><p>Item 1 Description</p></div>",
#     "<div class='carousel_item'><img src='https://via.placeholder.com/400' alt='Placeholder Image'><p>Item 2 Description</p></div>",
#     "<div class='carousel_item'><img src='https://via.placeholder.com/400' alt='Placeholder Image'><p>Item 3 Description</p></div>",
#     "<div class='carousel_item'><img src='https://via.placeholder.com/400' alt='Placeholder Image'><p>Item 4 Description</p></div>",
# ]

# carousel_html = f"""
# <div class="carousel">
# {"".join(carousel_items)}
# </div>
# <style>
# @keyframes carouselAnimation {{
#   0%, 100% {{ margin-left: 0; }}
#   25% {{ margin-left: -100%; }}
#   50% {{ margin-left: -200%; }}
#   75% {{ margin-left: -300%; }}
# }}
# .carousel {{
#   display: flex;
#   overflow: hidden;
#   animation: carouselAnimation 20s infinite linear;
# }}
# .carousel_item {{
#   min-width: 100%;
#   flex: 0 0 auto;
#   text-align: center;
#   padding: 20px;
#   box-sizing: border-box;
# }}
# .carousel_item img {{
#   width:500px;
#   height: 400px;
#   margin: 0 auto;
#   display: block;
# }}
# .carousel_item p {{
#   font-size: 16px;
#   color: #333; 
# }}
# </style>
# """

# st.markdown(carousel_html, unsafe_allow_html=True)


import React from 'react';
import { motion } from 'framer-motion';
import '../HomePage.css'; // Ensure this CSS file path is correct

const FeatureButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="feature-button"
  >
    {text}
  </motion.button>
);

const HomePage = () => {
  return (
    <motion.main
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        className="main-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="title">Your A.I Powered Career Companion</h1>
        <p className="hero-subtitle">Elevate your interview skills with the power of artificial intelligence. Practice anytime, anywhere, with instant feedback to improve your chances of landing your dream job.</p>
        <div className="button-container">
          <motion.button
            className="login-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login / Sign up
          </motion.button>
          <motion.button
            className="explore-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="features-title">Features</h2>
        <p className="features-subtitle">Discover how Aurora can guide you towards interview mastery:</p>
        <div className="features-list">
          <FeatureButton text="AI Interviews" />
          <p className="feature-description">Engage with an AI interviewer that adapts to your industry and role, providing realistic interview scenarios.</p>
          <FeatureButton text="Resume Reviewer" />
          <p className="feature-description">Upload your resume and get instant AI-driven feedback on how to optimize it for your dream job.</p>
          <FeatureButton text="A.I Coding Practice" />
          <p className="feature-description">For technical roles, practice coding challenges with our AI mentor, offering hints and time-efficient strategies.</p>
        </div>
      </motion.section>
      
      <motion.section
        className="cta-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="cta-title">Ready to Ace Your Next Interview?</h2>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started with Aurora
        </motion.button>
      </motion.section>
      <motion.section
        className="testimonials-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="testimonials-title">Success Stories</h2>
        <p className="testimonials-subtitle">Hear from those who've excelled with Aurora</p>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <h3>Nawab Shahzeb Uddin</h3>
            <p>"Aurora helped me land my dream job! The AI interviews were incredibly realistic and prepared me well."</p>
          </div>
          <div className="testimonial-card">
            <h3>Rehan Haider</h3>
            <p>"The Resume Reviewer was a game-changer. I received valuable feedback that made my resume stand out."</p>
          </div>
        </div>
      </motion.section>

      {/* FAQ/Help Center Section */}
      <motion.section
        className="faq-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How does the AI Interview feature work?</h3>
            <p>The AI Interview simulates a real interview scenario based on your selected industry and role. It provides instant feedback on your answers.</p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure with Aurora?</h3>
            <p>Yes, we take data security seriously. Your information is encrypted and protected according to industry standards.</p>
          </div>
          <div className="faq-item">
            <h3>Can I cancel my subscription anytime?</h3>
            <p>Absolutely! You can cancel your subscription at any time without any hidden fees.</p>
          </div>
        </div>
      </motion.section>

      {/* Blog/Resource Center Section */}
      <motion.section
        className="blog-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="blog-title">Resources & Insights</h2>
        <p className="blog-subtitle">Read our latest articles, tips, and industry insights</p>
        <div className="blog-posts">
          <div className="blog-post">
            <h3>Top 5 Interview Tips</h3>
            <p>Learn the best strategies to ace your next interview with these valuable tips.</p>
          </div>
          <div className="blog-post">
            <h3>How to Prepare for Technical Interviews</h3>
            <p>Technical interviews can be daunting. Here's how to effectively prepare and succeed.</p>
          </div>
        </div>
      </motion.section>

            {/* Contact/Support Section */}
            <motion.section
        className="contact-section"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Need help or have questions? Our team is here for you.</p>
        <div className="contact-info">
          <p>Email: contact@aurora.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="contact-form">
          {/* Contact form component would go here */}
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default HomePage;


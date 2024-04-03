import React from 'react';
import { motion } from 'framer-motion';
import '../WhyAurora.css';

const WhyAurora = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="why-aurora-container"
    >
      <div className="why-aurora-content">
        <h2 className="why-aurora-title">Why Aurora?</h2>

        <section className="section">
          <h3>For Students: Your Career Companion</h3>
          <p>
            Aurora is designed to be your ultimate career companion, offering a range of services to
            help you navigate the professional world and achieve your career goals.
          </p>
          <ul>
            <li>Create and manage your professional profile</li>
            <li>Access job search tools and resources</li>
            <li>Receive personalized career recommendations</li>
            <li>Participate in mock interviews and skill assessments</li>
            <li>Connect with industry professionals and mentors</li>
          </ul>
        </section>

        <section className="section">
          <h3>For Recruiters: Simplified Hiring Process</h3>
          <p>
            Aurora streamlines the hiring process for recruiters, providing a platform to
            efficiently find and hire top talent.
          </p>
          <ul>
            <li>Access a database of verified student profiles</li>
            <li>Receive tailored candidate recommendations</li>
            <li>Post job openings and manage applications</li>
            <li>Organize and conduct virtual interviews</li>
            <li>Utilize AI-driven tools for candidate screening</li>
          </ul>
        </section>

        <section className="section">
          <h3>Additional Features</h3>
          <p>
            In addition to the core services, Aurora offers various features to enhance the
            experience for both students and recruiters.
          </p>
          <ul>
            <li>Real-time notifications for job matches and interview invitations</li>
            <li>Secure and private communication channels</li>
            <li>Professional development resources and courses</li>
            <li>Data-driven insights and analytics for recruiters</li>
            <li>24/7 customer support and assistance</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default WhyAurora;

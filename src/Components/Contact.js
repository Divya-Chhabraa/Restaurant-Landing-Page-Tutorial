import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css'; // Ensure you have a CSS file for styling
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="contact-page">
        <Navbar />
      <h1>Get in Touch with Us 🔗</h1>
      <div className="team">
        <div className="team-member">
          {/* <img src="path-to-your-photo-1.jpg" alt="Person 1" className="team-photo" /> */}
          <h2>Akshit Kumar</h2>
          <p>3rd Year | CSE Student</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/akshit-kumar-16293b301/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/akshitkuma" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:kakshit257@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="team-member">
          {/* <img src="path-to-your-photo-2.jpg" alt="Person 2" className="team-photo" /> */}
          <h2>Divya Chhabra</h2>
          <p>3rd Year | CSE Student</p>
          <div className="social-icons">
            <a href="www.linkedin.com/in/-divyachhabra-" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Divya-Chhabraa" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:divyachhabra790@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import "../Styles/about.css";
import profileImage from "../Styles/s.png";

const About = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={profileImage} alt="" className="about-image"/>
      </div>
      <div className="about-text">
        <p>I dabble in coding</p>
      </div>
      <div className="about-social-container">
      <a href='https://github.com/samydev65' target='_blank' rel='noreferrer noopener'>
  <i className="fab fa-github about-social-icon"></i>
    </a>
        <a href='https://www.youtube.com/@samydev65' target='_blank' rel='noreferrer noopener'>
  <i className="fab fa-youtube about-social-icon"></i>
    </a>
        <i className="fas fa-envelope about-social-icon" onClick={() => setShowEmail(!showEmail)}></i>
        {showEmail && <p className="about-email">samy.dev65@gmail.com</p>}
      </div>
    </div>
  );
}

export default About;
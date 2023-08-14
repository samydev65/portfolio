import React, { useState, useEffect } from 'react';
import "../Styles/about.css";
import profileImage from "../Styles/s.png";

const About = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`about-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="about-image-container animate__animated animate__fadeInDown">
        <img src={profileImage} alt="" className="about-image"/>
      </div>
      <div className="about-text animate__animated animate__zoomInUp">
        <p>I dabble in coding</p>
      </div>
      <div className="about-social-container animate__animated animate__fadeIn">
        <a href='https://github.com/samydev65' target='_blank' rel='noreferrer noopener'>
          <i className="fab fa-github about-social-icon"></i>
        </a>
        <a href='https://www.youtube.com/@samydev65' target='_blank' rel='noreferrer noopener'>
          <i className="fab fa-youtube about-social-icon"></i>
        </a>
        <a href={`mailto:samy.dev65@gmail.com`} target='_blank' rel='noreferrer noopener'>
          <i className="fas fa-envelope about-social-icon"></i>
        </a>
        {showEmail && <p className="about-email">samy.dev65@gmail.com</p>}
      </div>
    </div>
  );
}

export default About;

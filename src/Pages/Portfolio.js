import React from 'react';
import "../Styles/Portfolio.css";
import { Link } from "react-router-dom"


function Portfolio() {
  return (
    <div className="background">
  <div>
  <Link to="/about" className='btn'>About</Link>
  <Link to="/projects" className='btn1'>Projects</Link>
  </div>
    </div>


  );
}

export default Portfolio;
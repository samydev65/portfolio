import React from 'react';
import "../Styles/home.css";
import { Link } from "react-router-dom"
import 'animate.css';




function Home() {
  return (
    <div className="background">
      
      <div className="animate__animated animate__fadeInDown">
        <Link to="/about" className='btn '>About</Link>
        <Link to="/projects" className='btn1'>Projects</Link>
      </div>
    </div>
  );
}

export default Home;

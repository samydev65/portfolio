import React from 'react';
import "../Styles/home.css";
import { Link } from "react-router-dom"



function Home() {
  return (
    <div className="background">
      
      <div className="links">
        <Link to="/about" className='btn'>About</Link>
        <Link to="/projects" className='btn1'>Projects</Link>
      </div>
    </div>
  );
}

export default Home;

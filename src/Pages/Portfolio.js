import React from 'react';
import "../Styles/portfolio.css";
import { Link } from "react-router-dom"


function Portfiolio() {
  return (
    <div className="background">
  <div>
  <Link to="/about" className='btn'>About</Link>
  <Link to="/projects" className='btn1'>Projects</Link>
  </div>
    </div>


  );
}

export default Portfiolio;
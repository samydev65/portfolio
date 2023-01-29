import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from "react-router-dom"

function Navbar() {
	const navRef = useRef();
  
	const showNavbar = () => {
	  navRef.current.classList.toggle("responsive_nav");
	};
  
	const hideNavbar = () => {
	  navRef.current.classList.remove("responsive_nav");
	};
  
	return (
	  <header>
		<CustomLink to="/" onClick={hideNavbar}><h3>samy</h3></CustomLink>
		<nav ref={navRef}>
		  <CustomLink to="/" onClick={hideNavbar}>Home</CustomLink>
		  <CustomLink to="/about" onClick={hideNavbar}>About</CustomLink>
		  <CustomLink to="/projects" onClick={hideNavbar}>Projects</CustomLink>
		  <button
			className="nav-btn nav-close-btn"
			onClick={showNavbar}>
			<FaTimes />
		  </button>
		</nav>
		<button className="nav-btn" onClick={showNavbar}>
		  <FaBars />
		</button>
	  </header>
	);
  }

function CustomLink({to, children, ...props }) {
	const path = window.location.pathname
	return (
		<li className={path === to ? "active" : ""}>
		<Link to={to} {...props}>
			{children}
		</Link>
		</li>
	)




}

export default Navbar;

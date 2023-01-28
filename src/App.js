import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from './Pages/Projects';
import { Route, Routes} from "react-router-dom"


function App() {

	return (
		<>
		
			<Navbar/>
			<div className='container'>
			<Routes>
				<Route path ="/" element={<Home />} />
				<Route path ="/about" element={<About />} />
				<Route path ="/projects" element={<Projects />} />

			</Routes>



			</div>


			</>
	)

}

export default App;

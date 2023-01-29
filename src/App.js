import React from 'react';
import Navbar from "./Components/Navbar";
import Portfolio from "./Pages/Portfolio"
import About from "./Pages/About"
import Projects from './Pages/Projects';
import { Route, Routes} from "react-router-dom"


function App() {

	return (
		<>
		
			<Navbar/>
			<div className='container'>
			<Routes basename="/portfolio">
				<Route path ="/portfolio" element={<Portfolio />} />
				<Route path ="/about" element={<About />} />
				<Route path ="/projects" element={<Projects />} />

			</Routes>



			</div>


			</>
	)

}

export default App;

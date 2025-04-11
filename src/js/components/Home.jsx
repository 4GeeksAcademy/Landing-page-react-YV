import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className = "Home">
			<div className="barra-navegacion">
				<Navbar/>
			</div>
			<div className= "container-fluid">
				<Jumbotron/>
			</div>
		</div>
	);
};

export default Home;
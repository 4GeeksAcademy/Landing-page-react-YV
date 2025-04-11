import React from "react";

import ListCard from "./listCard.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Footer from "./footer.jsx";

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
			<ListCard/>
			<Footer/>
		</div>
	);
};

export default Home;
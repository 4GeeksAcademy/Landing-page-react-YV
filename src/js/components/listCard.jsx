import React from "react";
  import Card from "./card.jsx";
  import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/29/367/267",
		title: "Picos nevados",
		description: "Picos nevados en Suiza",
	},
	{
		image: "https://picsum.photos/id/62/367/267",
		title: "Amanecer",
		description: "Amanecer en la Toscana Italiana",
	},
	{
		image: "https://picsum.photos/id/70/367/267",
		title: "Bosque",
		description: "Bosque nublado en Londres",
	},
	{
		image: "https://picsum.photos/id/176/367/267",
		title: "Bahia",
		description: "Bahia de Bridgeport",
	}
];

const ListCard = () => {
	return (
		<div className="text-center">
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListCard;

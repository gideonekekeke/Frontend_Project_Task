import React from "react";
import Hero from "../components/Hero/Hero";
import Discover from "../components/Discover/Discover";
import Prod from "../components/Prod/Prod";
import Ship from "../components/Ship/Ship";
import Categories from "../components/Categories/Categories";

const HomeScreen:React.FC = () => {
	return (
		<div
			style={{
				overflow: "hidden",
			}}>
			<Hero />
			<Discover />
			<Prod itemsPerPage={4} />
			<Ship />
			<Categories />
		</div>
	);
};

export default HomeScreen;

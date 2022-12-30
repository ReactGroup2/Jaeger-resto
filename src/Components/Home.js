import React from "react";
import { MenuProvider } from "./data/MenuContext";
import Header from "./Header/Header";
import MenuContainer from "./Menu/MenuContainer";

const Home = () => {
	return (
		<MenuProvider>
			<Header />
			<MenuContainer />
		</MenuProvider>
	);
};

export default Home;

import React, { useState } from "react";
import Cart from "./Cart/Cart";
import { MenuProvider } from "./data/MenuContext";
import Header from "./Header/Header";
import MenuContainer from "./Menu/MenuContainer";
import Modal from "./Modal-Ui/Modal";

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [item,setItem] = useState();
	const showModal=(item)=>{
setItem(item)
		setModalIsOpen(true);
		}
const closeModal=()=>{

setModalIsOpen(false);
}

	return (
		<MenuProvider>
			<Header />
			<MenuContainer onClick={showModal} />
			{modalIsOpen && <Modal item={item} onClose={closeModal}/>}
			<Cart/>
		</MenuProvider>
	);
};

export default Home;

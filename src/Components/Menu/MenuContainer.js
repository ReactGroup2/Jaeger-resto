import { useContext } from "react";
import "./menu-container.css";
import { MenuContext } from "../data/MenuContext";
import MenuItem from "./MenuItem";

const MenuContainer = ({onClick}) => {
	const [menu] = useContext(MenuContext);
	return (
		<div className="menu-wrapper">
			<h2 className="h2">Choose Dishes</h2>
			<div className="menu-items-wrapper">
				{menu.map((item) => (
					<MenuItem
					onClick={()=>onClick(item)}
						key={item.id}
						imgSrc={item.image}
						title={item.title}
						price={item.price}
						availability={item.availability}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuContainer;

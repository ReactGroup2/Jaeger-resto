import data from "../data/data.js";
import MenuItem from "./MenuItem";

const MenuContainer = () => {
	return (
		<div>
			<h2>Choose dishes</h2>
			{data.map((item) => (
				<MenuItem
					imgSrc={item.image}
					title={item.title}
					description={item.description}
					price={item.price}
				/>
			))}
		</div>
	);
};

export default MenuContainer;

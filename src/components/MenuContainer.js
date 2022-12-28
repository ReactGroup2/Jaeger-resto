import noodleImage from "./seafood-noodles.svg";
import MenuItem from "./MenuItem";

const MenuContainer = () => {
	const menuArray = [
		{
			id: 1,
			title: "Sea noodles",
			price: 15,
			image: noodleImage,
			description: "good",
			category: "soup",
		},
		{
			id: 2,
			title: "Beef noodles",
			price: 20,
			image: noodleImage,
			description: "very good",
			category: "warm",
		},
		{
			id: 3,
			title: "Shrimp noodles",
			price: 15,
			image: noodleImage,
			description: "nice",
			category: "",
		},
		{
			id: 1,
			title: "Sea noodles",
			price: 15,
			image: noodleImage,
			description: "good",
			category: "soup",
		},
		{
			id: 2,
			title: "Beef noodles",
			price: 20,
			image: noodleImage,
			description: "very good",
			category: "warm",
		},
		{
			id: 3,
			title: "Shrimp noodles",
			price: 15,
			image: noodleImage,
			description: "nice",
			category: "",
		},
	];

	return (
		<div>
			<h2>Choose dishes</h2>
			{menuArray.map((item) => (
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

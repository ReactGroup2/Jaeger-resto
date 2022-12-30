import seafoodNoodles from "./assets/seafood-noodles.png";
import mushroomNoodles from "./assets/mushroom-pasta.png";
import beefDumpling from "./assets/beef-dumpling.png";
import healthyNoodle from "./assets/healthy-peanut-noodle.png";
import omeletteRice from "./assets/fried-rice-omelette.png";
import spicyNoodle from "./assets/spicy-noodle-omelette.png";
import chickenNoodle from "./assets/sgpicy-chicken-noodle.png";
import shrimpSoup from "./assets/shrimp-soup.png";

const data = [
	{
		id: 1,
		title: "Spicy seasoned seafood noodles",
		price: 2.29,
		image: seafoodNoodles,
		description: "good noodles",
		category: ["Hot dishes", "soup"],
		availability: 20,
	},
	{
		id: 2,
		title: "Salted Pasta with mushroom sauce",
		price: 2.69,
		image: mushroomNoodles,
		description: "salty mushroom noodles",
		category: ["appetizer", "hot dishes"],
		availability: 20,
	},
	{
		id: 3,
		title: "Beef dumpling in hot and sour soup",
		price: 2.99,
		image: beefDumpling,
		description: "Soup with dumpling",
		category: ["hot dishes", "soup"],
		availability: 20,
	},
	{
		id: 4,
		title: "Healthy noodle with spinach leaf",
		price: 3.29,
		image: healthyNoodle,
		description: "cold noodles with spinach",
		category: "cold dishes",
		availability: 20,
	},
	{
		id: 5,
		title: "Hot spicy fried rice with omelette",
		price: 3.49,
		image: omeletteRice,
		description: "fried rice with egg omelette",
		category: ["hot dishes", "appetizer", "grill"],
		availability: 20,
	},
	{
		id: 6,
		title: "Spicy instant noodle with special omelette",
		price: 3.59,
		image: spicyNoodle,
		description: "spicy noodles in broth and an omelette",
		category: ["hot dishes", "soup"],
		availability: 20,
	},
	{
		id: 7,
		title: "Healthy noodle with peanut",
		price: 3.29,
		image: healthyNoodle,
		description: "Healthy noodles with peanuts",
		category: ["hot dishes", "appetizer"],
		availability: 20,
	},
	{
		id: 8,
		title: "Spicy chicken noodle soup",
		price: 3.49,
		image: chickenNoodle,
		description: "Noodles in broth with spicy chicken",
		category: ["hot dishes", "soup"],
		availability: 20,
	},
	{
		id: 9,
		title: "Red curry shrimp soup",
		price: 3.59,
		image: shrimpSoup,
		description: "shrimp in red curry soup with vegetables",
		category: ["hot dishes", "soup"],
		availability: 20,
	},
];

export default data;

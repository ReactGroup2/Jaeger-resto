import { useState, createContext } from "react";
import seafoodNoodles from "../../assets/seafood-noodles.svg";
import mushroomNoodles from "../../assets/mushroom-pasta.svg";
import beefDumpling from "../../assets/beef-dumpling.svg";
import healthyNoodle from "../../assets/healthy-peanut-noodle.svg";
import omeletteRice from "../../assets/healthy-noodle-omelet.svg";
import spicyNoodle from "../../assets/spicy-noodle-omelette.svg";
import chickenNoodle from "../../assets/Spicy-chicken-noodle.svg";
import shrimpSoup from "../../assets/shrimp-soup.svg";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: "Spicy seasoned seafood noodles",
      price: 2.29,
      image: seafoodNoodles,
      description: "good noodles",
      category: "Hot Dishes",
      availability: 20,
    },
    {
      id: 2,
      title: "Salted Pasta with mushroom sauce",
      price: 2.69,
      image: mushroomNoodles,
      description: "salty mushroom noodles",
      category:  "Hot Dishes",
      availability: 20,
    },
    {
      id: 3,
      title: "Beef dumpling in hot and sour soup",
      price: 2.99,
      image: beefDumpling,
      description: "Soup with dumpling",
      category:  "Soup",
      availability: 20,
    },
    {
      id: 4,
      title: "Healthy noodle with spinach leaf",
      price: 3.29,
      image: healthyNoodle,
      description: "cold noodles with spinach",
      category: "Cold Dishes",
      availability: 20,
    },
    {
      id: 5,
      title: "Hot spicy fried rice with omelette",
      price: 3.49,
      image: omeletteRice,
      description: "fried rice with egg omelette",
      category:  "Appetizer",
      availability: 20,
    },
    {
      id: 6,
      title: "Spicy instant noodle with special omelette",
      price: 3.59,
      image: spicyNoodle,
      description: "spicy noodles in broth and an omelette",
      category: "Hot Dishes",
      availability: 20,
    },
    {
      id: 7,
      title: "Healthy noodle with peanut",
      price: 3.29,
      image: healthyNoodle,
      description: "Healthy noodles with peanuts",
      category: "Appetizer",
      availability: 20,
    },
    {
      id: 8,
      title: "Spicy chicken noodle soup",
      price: 3.49,
      image: chickenNoodle,
      description: "Noodles in broth with spicy chicken",
      category:  "Soup",
      availability: 20,
    },
    {
      id: 9,
      title: "Red curry shrimp soup",
      price: 3.59,
      image: shrimpSoup,
      description: "shrimp in red curry soup with vegetables",
      category: "Soup",
      availability: 20,
    }
  ]);

  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {props.children}
    </MenuContext.Provider>
  );
};

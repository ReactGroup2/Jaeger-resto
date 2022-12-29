import noodleImage from "./seafood-noodles.svg";

import "../styles/menu-container.css";

import MenuItem from "./MenuItem";

const MenuContainer = () => {
  const menuArray = [
    {
      id: 1,
      title: "Spicy seasoned seafood noodles",
      price: 13.8,
      image: noodleImage,
      description: "amazing",
      category: "soup",
      availability: 16 + " bowls available",
    },
    {
      id: 2,
      title: "Spicy instant noodle with special omelette",
      price: 22.5,
      image: noodleImage,
      description: "very good",
      category: "warm",
      availability: 13 + " bowls available",
    },
    {
      id: 3,
      title: "Spicy seasoned seafood noodles",
      price: 16.3,
      image: noodleImage,
      description: "nice",
      category: "",
      availability: 28 + " bowls available",
    },
    {
      id: 1,
      title: "Spicy seasoned seafood noodles",
      price: 15.5,
      image: noodleImage,
      description: "good",
      category: "soup",
      availability: 9 + " bowls available",
    },
    {
      id: 2,
      title: "Spicy seasoned seafood noodles",
      price: 19.9,
      image: noodleImage,
      description: "very good",
      category: "warm",
      availability: 5 + " bowls available",
    },
    {
      id: 3,
      title: "Spicy seasoned seafood noodles",
      price: 9.9,
      image: noodleImage,
      description: "nice",
      category: "",
      availability: 20 + " bowls available",
    },
  ];

  return (
    <div className="menu-wrapper">
      <h2 className="h2">Choose Dishes</h2>
      <div className="menu-items-wrapper">
        {menuArray.map((item) => (
          <MenuItem
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

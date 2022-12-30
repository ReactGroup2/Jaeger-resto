import data from "../data/data.js";
import "../styles/menu-container.css";
import MenuItem from "./MenuItem";

const MenuContainer = () => {
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

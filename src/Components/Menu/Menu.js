import { useContext } from "react";
import "./Menu.css";
import { MenuContext } from "../data/MenuContext";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu] = useContext(MenuContext);
  return (
    <div className="menu-wrapper">
      <div className="menu-items-wrapper">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            imgSrc={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;

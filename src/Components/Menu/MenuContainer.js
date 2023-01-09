import { useContext, useState } from "react";
import "./menu-container.css";
import { MenuContext } from "../data/MenuContext";
import MenuItem from "./MenuItem";
import { CartContext } from "../data/CartContext";
import CartMenu from "./CartMenu";

const MenuContainer = ({ onClick }) => {

  const [menu] = useContext(MenuContext);
  // const {
  //   state: { cart },
  //   state: { items },
  //   dispatch,
  // } = useContext(CartContext);
  
  return (
    <div className="menu-wrapper">
      <div className="container">
        <h2 className="h2">Choose Dishes</h2>
       <CartMenu />
      </div>
      <div className="menu-items-wrapper">
        {menu.map((item) => (
          <MenuItem
            onClick={() => onClick(item)}
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

import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Button } from "react-bootstrap";
import { CartContext } from "../data/CartContext";

const CartMenu = () => {
  const {
    state: { cart },
    dispatch,
    setShow,
  } = useContext(CartContext);

  const handleShow = () => setShow(true);

  return (
    <Dropdown className="d-inline mx-2 my-3 dropdown">
      <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
        <AiOutlineShoppingCart />
        <Badge bg="secondary">{cart.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: 100, textAlign: "center" }}>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <span key={item.id} className="cartitem">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cartItemImg"
                />
                <div className="cartItemDetail">
                  <span>{item.title}</span>
                  <span>
                    {item.price.toFixed(2)} * {item.qty} qty
                  </span>
                </div>
              </span>
            ))}
            <Dropdown.Item>
              <Button
                style={{ width: "95%", margin: "0 10px" }}
                onClick={handleShow}
              >
                Go To Cart
              </Button>
            </Dropdown.Item>
          </>
        ) : (
          <span style={{ padding: 10 }}>Cart Is Empty</span>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartMenu;

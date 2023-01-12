import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./menuContainer.module.css";
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
      <Dropdown.Menu
        className="cart-dropdown-menu"
        style={{
          maxWidth: "100",
          maxHeight: "70vh",
          textAlign: "center",
          paddingBottom: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginLeft: "-50px",
          backgroundColor: "#565e64",
          border: "solid",
          borderSize: "1px",
          borderColor: "white",
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          overflowY: "scroll",
        }}
      >
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <span key={item.id} className="cartItem">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cartItemImg"
                  style={{
                    marginTop: "20px",
                    marginBottom: "5px",
                  }}
                />
                <div className="cartItemDetail">
                  <span
                    style={{
                      paddingLeft: "5px",
                    }}
                  >
                    {item.title}{" "}
                  </span>
                  <span
                    style={{
                      fontFamily: "Barlow-Regular",
                      textDecoration: "underline",
                      fontSize: "18px",
                    }}
                  >
                    ${item.price.toFixed(2)} x {item.qty} pcs
                  </span>
                </div>
              </span>
            ))}
            <Dropdown.Item>
              <Button
                style={{
                  width: "95%",
                  marginTop: "10px",
                  marginBottom: "-15px",
                  backgroundColor: "#ea7c69",
                  borderColor: "#ea7c69",
                }}
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

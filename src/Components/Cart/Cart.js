import React, { useContext, useState,useEffect } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { CartContext } from "../data/CartContext";
import CartItem from "./CartItem";
import classes from "./cart-wrapper.module.css";
import Button from "../Button/Button";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
    show,
    setShow,
  } = useContext(CartContext);
  const [total,setTotal]=useState(0)
  useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc + +(curr.price*curr.qty),0));


},[cart])
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end" className='w-40'>
      
      
        <div className={`${classes.wrapper}`} >
        <Offcanvas.Header closeButton closeVariant="white" >
          <h2 className={classes.h2}>Order</h2>
        </Offcanvas.Header>
          <div className={classes["options-buttons__wrapper"]}>
            <Button className="button__main" text="Dine In" />
            <Button className="button__secondary_options" text="To Go" />
            <Button className="button__secondary_options" text="Delivery" />
          </div>
          <div className={classes["cart-details-titles__wrapper"]}>
            <h3 className={classes["cart-details-titles__1"]}>Item</h3>
            <h3 className={classes["cart-details-titles__2"]}>Qty</h3>
            <h3 className={classes["cart-details-titles__3"]}>Price</h3>
          </div>
          <div className={classes.orders}>
            <Offcanvas.Body>
              <Stack gap={3}>
                {cart.map((item) => (
                  <CartItem key={item.id} {...item} dispatch={dispatch} />
                ))}
              </Stack>
            </Offcanvas.Body>
          </div>
          <div className={classes.bottom__wrapper}>
            <p className={classes.left}>Discount</p>
            <h2 className={classes.right}>$0.00</h2>
          </div>
          <div className={classes.bottom__wrapper}>
            <p className={classes.left}>Total</p>
            <h2 className={classes.right}>${total.toFixed(2)}</h2>
          </div>
          <Button text="Continue to payment" className="button__main" />
        </div>
      </Offcanvas>
    </>
  );
};

export default Cart;

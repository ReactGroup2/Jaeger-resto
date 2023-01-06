import classes from "./cart-wrapper.module.css";
import { useState } from "react";

const CartWrapper = () => {
  const [isCartWrapperOpen, setIsCartWrapperOpen] = useState(false);

  return (
    <div>
      {/* The button to toggle the CartWrapper */}
      {/*       <button onClick={() => setIsCartWrapperOpen(!isCartWrapperOpen)}>
        Toggle CartWrapper
      </button> */}
      {/* The CartWrapper itself */}
      {isCartWrapperOpen && (
        <div className={`${classes.wrapper}`}>
          {/* The CartWrapper content goes here */}
          <h2 className={classes.h2}>Order</h2>
          <div className={classes["options-buttons__wrapper"]}></div>
          <div className={classes["cart-details-titles__wrapper"]}>
            <h3 className={classes["cart-details-titles__1"]}>Item</h3>
            <h3 className={classes["cart-details-titles__2"]}>Qty</h3>
            <h3 className={classes["cart-details-titles__3"]}>Price</h3>
          </div>
          <div className={classes.orders}>
            <h1>Placeholder! for now!</h1>
          </div>
          <div className={classes.bottom__wrapper}>
            <p className={classes.left}>Discount</p>
            <h2 className={classes.right}>$0.00</h2>
          </div>
          <div className={classes.bottom__wrapper}>
            <p className={classes.left}>Total</p>
            <h2 className={classes.right}>$21.00</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWrapper;

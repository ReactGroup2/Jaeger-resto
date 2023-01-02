import classes from "./cart-wrapper.module.css";
import Button from "../Button/Button";

const CartWrapper = () => {
	return (
		<div className={`${classes.wrapper}`}>
			<h2 className={classes.h2}>Order</h2>
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
			<Button text="Continue to payment" className="button__main" />
		</div>
	);
};

export default CartWrapper;

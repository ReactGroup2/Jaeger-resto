import React, { useContext } from "react";
import { Stack } from "react-bootstrap";
import { CartContext } from "../data/CartContext";
import classes from "./cart.module.css";
import { CgTrashEmpty } from "react-icons/cg";
const CartItem = ({ image, title, price, qty, id }) => {
	const { dispatch } = useContext(CartContext);

	return (
		<>
			<Stack direction="horizontal" gap={2}>
				<div className={classes.header}>
					<img
						src={image}
						alt={title}
						style={{
							width: "65px",
							height: "30px",
							borderRadius: "30px",
							perspective: "1000px",
						}}
					/>

					<div>
						<span className={classes.title}>{title}</span>
						<span className={classes.qty}>
							<input
								type="number"
								as="select"
								min={1}
								max={5}
								value={qty}
								onChange={(e) =>
									dispatch({
										type: "CHANGE_CART_QTY",
										payload: {
											id: id,
											qty: e.target.value,
										},
									})
								}
							/>
						</span>
						<div className="text-muted">${price.toFixed(2)} </div>
					</div>
				</div>
				<div className={classes["single-item-total"]}>
					${+(price * qty).toFixed(2)}{" "}
				</div>
			</Stack>
			<Stack>
				<div className={classes.el}>
					<div
						className={classes["delete-icon"]}
						onClick={() =>
							dispatch({
								type: "REMOVE_FROM_CART",
								payload: {
									id: id,
								},
							})
						}
					>
						<CgTrashEmpty />
					</div>
					<input type="text" placeholder="Order Note..." />
				</div>
			</Stack>
		</>
	);
};

export default CartItem;

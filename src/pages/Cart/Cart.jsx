import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import useStyles from "./styles";
import { Typography, Divider, IconButton } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";

const Cart = ({ cartItems, setCartItems, itemsSavedForLater }) => {
	const [totalAmount, setTotalAmount] = useState(0);
	const [undiscountedTotalAmount, setUndiscountedTotalAmount] = useState(0);
	const classes = useStyles();

	const redirectToHomeButton = (
		<IconButton variant="contained">
			<Link to="/" style={{ textDecoration: "none", color: "white" }}>
				<HomeIcon />
			</Link>
		</IconButton>
	);

	console.log(cartItems);

	return (
		<div>
			<Header navigationButton={redirectToHomeButton} />

			<div className={classes.cartContainer}>
				<div className={classes.leftPanel}>
					<div>
						<Typography variant="h5">
							<strong>My Cart ({cartItems.length})</strong>
						</Typography>
						{cartItems.map(item => (
							<CartItem
								itemObj={{ ...item, quantity: 1 }}
								key={item.id}
								setCartItems={setCartItems}
								setTotalAmount={setTotalAmount}
								setUndiscountedTotalAmount={setUndiscountedTotalAmount}
							/>
						))}
					</div>
					{itemsSavedForLater ? <div>Saved for later</div> : null}
				</div>
				<div className={classes.rightPanel}>
					<Typography>PRICE DETAILS</Typography>
					<Divider />
					<div className={classes.priceDetails}>
						<div>
							<span>Price: </span> <span>{undiscountedTotalAmount}</span>
						</div>
						<div>
							<span>Discount: </span> <span>-{undiscountedTotalAmount - totalAmount}</span>
						</div>
						<div>
							<span>Delievery charges: </span> <span>Free</span>
						</div>
						<Divider />
						<div>
							<span>
								<strong>Total Amount:</strong>{" "}
							</span>{" "}
							<span>
								<strong>{totalAmount}</strong>
							</span>
						</div>
						<Divider />
						<footer>You will save {undiscountedTotalAmount - totalAmount} on this order.</footer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

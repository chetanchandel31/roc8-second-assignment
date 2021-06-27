import { Typography, Button, IconButton } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import useStyles from "./styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartItem = ({ itemObj, setCartItems, setTotalAmount, setUndiscountedTotalAmount, setItemsSavedForLater }) => {
	const [item, setItem] = useState({ ...itemObj, quantity: localStorage.getItem(itemObj.id) || 1 });
	const classes = useStyles();

	useEffect(() => {
		localStorage.setItem(item.id, item.quantity);
		if (item.quantity <= 1) localStorage.removeItem(item.id);
	}, [item.quantity, item.id]);

	useEffect(() => {
		setTotalAmount(prevAmount => prevAmount + item.discountedPrice * item.quantity);
		setUndiscountedTotalAmount(prevAmount => prevAmount + item.price * item.quantity);

		return () => {
			setTotalAmount(prevAmount => prevAmount - item.discountedPrice * item.quantity);
			setUndiscountedTotalAmount(prevAmount => prevAmount - item.price * item.quantity);
		};
		// eslint-disable-next-line
	}, []);

	const removeFromCart = item => {
		setCartItems(prevItems => {
			const newItems = [...prevItems];
			const deleteItemIndex = newItems.findIndex(newItem => newItem.id === item.id);
			newItems.splice(deleteItemIndex, 1);
			return newItems;
		});
		localStorage.removeItem(item.id);
	};

	const saveForLater = item => {
		removeFromCart(item);
		setItemsSavedForLater(prevItems => {
			const newItems = [...prevItems];
			newItems.push(item);
			return newItems;
		});
	};

	const decrementItem = () => {
		if (item.quantity <= 1) return;
		setItem(prevItem => ({ ...prevItem, quantity: prevItem.quantity - 1 }));
		setTotalAmount(prevAmount => prevAmount - item.discountedPrice);
		setUndiscountedTotalAmount(prevAmount => prevAmount - item.price);
	};

	const incrementItem = () => {
		setItem(prevItem => ({ ...prevItem, quantity: prevItem.quantity + 1 }));
		setTotalAmount(prevAmount => prevAmount + item.discountedPrice);
		setUndiscountedTotalAmount(prevAmount => prevAmount + item.price);
	};

	return (
		<div className={classes.root}>
			<div className={classes.counter}>
				<div className={classes.imageContainer}>
					<img src={item.image} className={classes.image} alt="item" />
				</div>
			</div>

			<div className={classes.itemDetails}>
				<div>
					<Typography variant="h5">{item.name}</Typography>
					<Typography>Size: {item.size}</Typography>
				</div>

				<div>
					<Typography className={classes.price}>
						<strong>₹{item.discountedPrice * item.quantity}</strong> <strike>₹{item.price * item.quantity}</strike>{" "}
						<small>{item.discount ? `${item.discount}% off` : null}</small>
					</Typography>
				</div>

				<div>
					<IconButton onClick={decrementItem}>
						<RemoveIcon />
					</IconButton>
					{item.quantity}
					<IconButton onClick={incrementItem}>
						<AddIcon />
					</IconButton>
				</div>

				<div>
					<Button onClick={() => saveForLater(item)}>Save for later</Button>
					<Button onClick={() => removeFromCart(item)}>Remove</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

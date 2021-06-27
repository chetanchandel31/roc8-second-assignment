import { Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const ItemSavedForLater = ({ item, setCartItems, setItemsSavedForLater }) => {
	const classes = useStyles();

	const removeItem = item => {
		setItemsSavedForLater(prevItems => {
			const newItems = [...prevItems];
			const deleteItemIndex = newItems.findIndex(newItem => newItem.id === item.id);
			newItems.splice(deleteItemIndex, 1);
			return newItems;
		});
	};

	const addToCart = item => {
		setCartItems(prevState => {
			const newItems = [...prevState];
			newItems.push(item);
			return newItems;
		});
		removeItem(item);
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
					<Button onClick={() => addToCart(item)}>Add to cart</Button>
					<Button onClick={() => removeItem(item)}>Remove</Button>
				</div>
			</div>
		</div>
	);
};

export default ItemSavedForLater;

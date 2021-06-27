import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Button, Typography, Grid, IconButton } from "@material-ui/core";
import products from "../../fixtures/products.json";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Home = ({ cartItems, setCartItems }) => {
	const redirectToCartButton = (
		<IconButton color="primary">
			<Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
				<ShoppingCartIcon />
			</Link>
		</IconButton>
	);

	const addToCart = item => {
		setCartItems(prevState => {
			const newItems = [...prevState];
			newItems.push(item);
			return newItems;
		});
	};

	return (
		<div>
			<Header navigationButton={redirectToCartButton} />

			<Grid container alignItems="stretch" spacing={0} style={{ marginTop: "20px" }}>
				{products.map(item => (
					<Grid key={item.id} item xs={12} sm={4} md={4} lg={4} style={{ padding: "5px" }}>
						<Card>
							<CardHeader title={item.name} />
							<CardMedia image={item.image} style={{ paddingTop: "56.25%", margin: "0 10%" }} />
							<CardContent>
								<Typography>Size: {item.size}</Typography>
								<Typography>Ideal for: {item.idealFor}</Typography>
								<Typography>
									<strong>₹{item.discountedPrice}</strong> <strike>₹{item.price}</strike>{" "}
									<small style={{ color: "#388e3c" }}>{item.discount ? `${item.discount}% off` : null}</small>
								</Typography>
							</CardContent>
							<div style={{ textAlign: "right" }}>
								{!cartItems.includes(item) ? (
									<Button style={{ marginRight: "10px", color: "green" }} startIcon={<AddShoppingCartIcon />} onClick={() => addToCart(item)}>
										Add to cart
									</Button>
								) : (
									<Button style={{ marginRight: "10px" }}>
										<Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
											Go to Cart
										</Link>
									</Button>
								)}
							</div>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;

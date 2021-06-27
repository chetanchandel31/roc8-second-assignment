import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [itemsSavedForLater, setItemsSavedForLater] = useState([]);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/cart" exact>
						<Cart cartItems={cartItems} setCartItems={setCartItems} itemsSavedForLater={itemsSavedForLater} setItemsSavedForLater={setItemsSavedForLater} />
					</Route>
					<Route path="/" exact>
						<Home cartItems={cartItems} setCartItems={setCartItems} setItemsSavedForLater={setItemsSavedForLater} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

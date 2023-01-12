import Home from "./components/Home";
import { CartProvider } from "./components/data/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<CartProvider>
			<Home />
			<Cart />
		</CartProvider>
	);
}

export default App;

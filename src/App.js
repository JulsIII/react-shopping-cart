import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item]);
	};

	const removeItem = index => {
		// add the given item to the cart
		// setCart([...cart,item]);
		const temp = [...cart]// splice out index
		temp.splice(index, 1);
		setCart(temp);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import Cart from './Cart/Cart';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Product from './Product/Product';
// styles
import { Wrapper, StyledButton } from './App.styles';

// types
export type CartProductType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

const getProducts = async (): Promise<CartProductType[]> =>
	await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
	const [cartInUse, setCartInUse] = useState(false);
	const [cartProducts, setCartProducts] = useState([] as CartProductType[]);

	const { data, isLoading, error } = useQuery<CartProductType[]>(
		'products',
		getProducts
	);
	console.log(data);

	const getTotalProducts = (products: CartProductType[]) => {
		// sums all products in cart and returns accumulated amount
		return products.reduce((acc: number, product) => acc + product.amount, 0);
	};

	const handleAddToCart = (clickedProduct: CartProductType) => {
		setCartProducts((previous) => {
			// checks if product is already in cart
			const productInCart = previous.find(
				(item) => item.id === clickedProduct.id
			);

			if (productInCart) {
				return previous.map((product) =>
					product.id === clickedProduct.id
						? { ...product, amount: product.amount + 1 }
						: product
				);
			}
			// add item to cart initially
			return [...previous, { ...clickedProduct, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartProducts((previous) =>
			previous.reduce((acc, product) => {
				if (product.id === id) {
					// if only one of a product is in cart, removes it from array
					if (product.amount === 1) return acc;
					return [...acc, { ...product, amount: product.amount - 1 }];
				} else {
					return [...acc, product];
				}
			}, [] as CartProductType[])
		);
	};

	if (isLoading) return <LinearProgress />; //shows progress at top of screen; could be changed to loading icon
	if (error) return <div>Something went wrong...</div>;

	return (
		<Wrapper>
			<Drawer
				anchor='right'
				open={cartInUse}
				onClose={() => setCartInUse(false)}>
				<Cart
					cartProducts={cartProducts}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</Drawer>
			<StyledButton onClick={() => setCartInUse(true)}>
				<Badge badgeContent={getTotalProducts(cartProducts)} color='error'>
					<AddShoppingCartIcon />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data?.map((product) => (
					<Grid item key={product.id} xs={12} sm={4}>
						<Product product={product} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;

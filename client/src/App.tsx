import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Product from './Product/Product';
// styles
import { Wrapper } from './App.styles';

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
	const { data, isLoading, error } = useQuery<CartProductType[]>(
		'products',
		getProducts
	);
	console.log(data);

	const getTotalProducts = () => null;

	const handleAddToCart = (clickedProduct: CartProductType) => null;

	const handleRemoveFromCart = () => null;

	if (isLoading) return <LinearProgress />; //shows progress at top of screen; could be changed to loading icon
	if (error) return <div>Something went wrong...</div>;

	return (
		<Wrapper>
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

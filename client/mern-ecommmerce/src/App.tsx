import { useState } from 'react';
import { useQuery } from 'react-query';
// components
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
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

	return <div className='App'>Start</div>;
};

export default App;

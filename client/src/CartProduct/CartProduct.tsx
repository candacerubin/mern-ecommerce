import Button from '@mui/material/Button';
// types
import { CartProductType } from '../App';
// styles
import { Wrapper } from './CartProduct.styles';

type Props = {
	product: CartProductType;
	addToCart: (clickedProduct: CartProductType) => void;
	removeFromCart: (id: number) => void;
};

export const CartProduct: React.FC<Props> = ({
	product,
	addToCart,
	removeFromCart,
}) => (
	<Wrapper>
		<div>
			<h3>{product.title}</h3>
			<div className='info'>
				<p>Price: ${product.price.toFixed(2)}</p>
				<p>Total: ${(product.amount * product.price).toFixed(2)}</p>
			</div>
			<div className='buttons'>
				<Button
					size='small'
					disableElevation
					variant='contained'
					onClick={() => addToCart(product)}>
					+
				</Button>
				<p>{product.amount}</p>
				<Button
					size='small'
					disableElevation
					variant='contained'
					onClick={() => removeFromCart(product.id)}>
					-
				</Button>
			</div>
		</div>
		<img src={product.image} alt={product.title} />
	</Wrapper>
);

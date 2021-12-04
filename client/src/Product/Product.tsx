import Button from '@mui/material/Button';
// types
import { CartProductType } from '../App';
// styles
import { Wrapper } from './Product.styles';

type Props = {
	product: CartProductType;
	handleAddToCart: (clickedProduct: CartProductType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => (
	<Wrapper>
		<img src={product.image} alt={product.title} />
		<div>
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<h3>{product.price}</h3>
		</div>
		<Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
	</Wrapper>
);

export default Product;

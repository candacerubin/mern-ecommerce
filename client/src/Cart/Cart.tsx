import { Wrapper } from './Cart.styles';
import { CartProductType } from '../App';
import { CartProduct } from '../CartProduct/CartProduct';

type Props = {
	cartProducts: CartProductType[];
	addToCart: (clickedProduct: CartProductType) => void;
	removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartProducts, addToCart, removeFromCart }) => {
	const calcTotal = (products: CartProductType[]) => {
		return products.reduce(
			(acc: number, product) => acc + product.amount * product.price,
			0
		);
	};

	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartProducts.length === 0 ? <p>Cart empty</p> : null}
			{cartProducts.map((product) => (
				<CartProduct
					key={product.id}
					product={product}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h2>Total: ${calcTotal(cartProducts).toFixed(2)}</h2>
		</Wrapper>
	);
};

export default Cart;

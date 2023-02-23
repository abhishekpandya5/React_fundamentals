import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return cartItems.length ? (
		<div>
			<h1 className="font-bold text-xl mb-2">Cart Items</h1>
			<button
				className="border bg-green-400 border-green-600 p-2 m-5 rounded"
				onClick={() => handleClearCart()}
			>
				Clear Cart
			</button>
			<div className="flex flex-wrap justify-around px-8 gap-5">
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
		</div>
	) : (
		<div>Cart is empty</div>
	);
};

export default Cart;

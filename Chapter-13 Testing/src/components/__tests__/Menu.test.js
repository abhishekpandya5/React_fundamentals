import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import store from '../../utils/store';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import Cart from '../Cart';
import { MENU_DATA } from '../../mocks/data';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MENU_DATA);
		}
	});
});

test('Add items to cart', async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
				<RestaurantMenu />
				<Cart />
			</Provider>
		</StaticRouter>
	);

	await waitFor(() => expect(body.getByTestId('restaurant-menu')));

	const addBtn = body.getAllByTestId('add-btn');

	const cart = body.getByTestId('cart');

	fireEvent.click(addBtn[0]);
	fireEvent.click(addBtn[1]);

	expect(cart.innerHTML).toBe('Cart <span> - 2 items</span>');

	// TODO
	// const cartItems = body.getAllByTestId('cart-items');
	// console.log(cartItems.innerHTML);
	// expect(cartItems.length).toBe(1);
});

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../Header';

test('Logo should load on rendering header', () => {
	// Load Header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	const logo = header.getAllByTestId('logo');

	// console.log(logo[0]);

	expect(logo[0].src).toBe('http://localhost/dummy.png');

	// Check if logo is loaded
});

test('Status should be online on rendering header', () => {
	// Load Header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);
	const onlineStatus = header.getByTestId('online-status');

	expect(onlineStatus.innerHTML).toBe('Online');
});

test('Cart should have 0 items', () => {
	// Load Header
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	const cart = header.getByTestId('cart');

	expect(cart.innerHTML).toBe('Cart ');
});

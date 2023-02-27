import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { RESTAURANT_DATA } from '../../mocks/data';
import store from '../../utils/store';
import Body from '../Body';
import Header from '../Header';

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(RESTAURANT_DATA);
		}
	});
});

test('Shimmer should load on Homepage', () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);

	const shimmer = body.getAllByTestId('shimmer');

	expect(shimmer[0]).toBeInTheDocument();
	expect(shimmer.length).toBe(15);
});

test('Restaurant should load on homepage', async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);

	await waitFor(() => expect(body.getByTestId('search-btn')));

	const restaurantList = body.getByTestId('restaurant-list');

	expect(restaurantList.children.length).toBe(15);
	// console.log(restaurantList.children.length)
});

test('Search for string(food)', async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);

	await waitFor(() => expect(body.getByTestId('search-btn')));

	const searchInput = body.getByTestId('search-input');

	fireEvent.change(searchInput, {
		target: {
			value: 'food'
		}
	});

	const searchBtn = body.getByTestId('search-btn');

	fireEvent.click(searchBtn);

	const restaurantList = body.getByTestId('restaurant-list');

	expect(restaurantList.children.length).toBe(1);
});

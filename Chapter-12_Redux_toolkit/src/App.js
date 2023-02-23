import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Instamart from './components/Instamart';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const About = lazy(() => import('./components/About'));

const App = () => {
	const [user, setUser] = useState({
		name: 'Abhishek_Pandya',
		email: 'Abhishek_Pandya@gamail.com'
	});
	return (
		<Provider store={store}>
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<Outlet />
				<Footer />
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about', // "/" means from the route, we can also write "about" also
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<About />
					</Suspense>
				),
				children: [
					{
						path: 'profile', // parentPath/{path}
						element: <Profile />
					}
				]
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />
			},
			{
				path: '/instamart',
				element: <Instamart />
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

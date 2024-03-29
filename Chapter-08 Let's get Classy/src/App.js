import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

const App = () => (
	<div className="layout">
		<Header />
		<Outlet />
		<Footer />
	</div>
);

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
				path: '/about',  // "/" means from the route, we can also write "about" also
				element: <About />,
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
				path: '/restaurant/:id',
				element: <RestaurantMenu />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

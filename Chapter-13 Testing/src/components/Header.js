import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useNetwork from '../utils/useNetwork';
import Logo from '../../assets/img/logo1.png';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const isOnline = useNetwork();
	const { user } = useContext(UserContext);

	const cartItems = useSelector((store) => store.cart.items);

	return (
		<header className="flex justify-between items-center">
			<Link to="/" className="w-28">
				<img data-testid="logo" alt="logo" src={Logo} />
			</Link>

			<div>
				<span className="font-bold">Welcome,</span> {user.name} - {user.email}
			</div>

			<div className="nav-items flex justify-evenly gap-6">
				<ul className="flex justify-between gap-6">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/instamart">Instamart</Link>
					</li>
					<li>
						<Link to="/cart" data-testid="cart">
							Cart{' '}
							{cartItems.length ? <span> - {cartItems.length} items</span> : ''}
						</Link>
					</li>
				</ul>
				<div data-testid="online-status" className="cursor-pointer">
					{isOnline ? 'Online' : 'Offline'}
				</div>
				{isLoggedIn ? (
					<button onClick={() => setIsLoggedIn(false)}>Logout</button>
				) : (
					<button onClick={() => setIsLoggedIn(true)}>Login</button>
				)}
			</div>
		</header>
	);
};

export default Header;

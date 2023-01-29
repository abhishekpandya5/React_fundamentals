import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNetwork from '../utils/useNetwork';
import Logo from '../../assets/img/logo1.png';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const isOnline = useNetwork();
	
	return (
		<div className="header">
			<Link to="/">
				<img className="logo" alt="logo" src={Logo} />
			</Link>

			<div className="nav-items">
				<ul>
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
						<Link to="/">Cart</Link>
					</li>
				</ul>
				<div>{isOnline ? 'Online' : 'Offline'}</div>
				{isLoggedIn ? (
					<button onClick={() => setIsLoggedIn(false)}>Logout</button>
				) : (
					<button onClick={() => setIsLoggedIn(true)}>Login</button>
				)}
			</div>
		</div>
	);
};

export default Header;

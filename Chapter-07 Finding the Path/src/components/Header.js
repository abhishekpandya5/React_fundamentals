import Logo from '../../assets/img/logo1.png';
import { Link } from 'react-router-dom';

const Title = () => (
	<Link to="/">
		<img className="logo" alt="logo" src={Logo} />
	</Link>
);

const Header = () => {
	return (
		<div className="header">
			<Title />

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
			</div>
		</div>
	);
};

export default Header;

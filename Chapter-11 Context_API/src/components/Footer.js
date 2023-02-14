import { useContext } from 'react';
import UserContext from '../utils/userContext';

const Footer = () => {
	const { user } = useContext(UserContext);
	return (
		<footer className="flex justify-center" style={{ background: '#333030' }}>
			<h4 className="text-white">
				This site is developed by {user.name} - {user.email}
			</h4>
		</footer>
	);
};

export default Footer;

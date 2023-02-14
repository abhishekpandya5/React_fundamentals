import { IMG_CDN_URL } from '../constant';
import { useContext } from 'react';
import UserContext from '../utils/userContext';

const RestrauntCard = ({
	name,
	cuisines,
	cloudinaryImageId,
	lastMileTravelString
}) => {
	const { user } = useContext(UserContext);
	return (
		<div className="card w-64 mb-8 bg-gray-100 rounded-md p-2">
			<img className="mb-2" src={IMG_CDN_URL + cloudinaryImageId} />
			<h2 className="font-bold">{name}</h2>
			<h3>{cuisines?.join(', ')}</h3>
			<div className="text-sm">{lastMileTravelString}</div>
			<div>{user.name}</div>
		</div>
	);
};

export default RestrauntCard;

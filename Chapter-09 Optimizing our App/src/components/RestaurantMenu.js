import { useParams } from 'react-router-dom';
import { DETAIL_URL, IMG_CDN_URL } from '../constant';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant'; // custom hook

const RestaurantMenu = () => {
	const { resId } = useParams();

	const restaurantInfo = useRestaurant(resId);

	const { cloudinaryImageId, name, locality } = restaurantInfo || {};

	return !restaurantInfo ? (
		<Shimmer />
	) : (
		<div>
			<img src={IMG_CDN_URL + cloudinaryImageId} alt="menu" />
			<h1>Restaurant id: {resId}</h1>
			<h2>{name}</h2>
			<h3>{locality}</h3>
		</div>
	);
};

export default RestaurantMenu;

import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constant';
import useRestaurant from '../utils/useRestaurant'; // custom hook
import Shimmer from './Shimmer';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurantInfo = useRestaurant(resId);

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	const { cloudinaryImageId, name, locality } = restaurantInfo || {};

	return !restaurantInfo ? (
		<Shimmer />
	) : (
		<div className="flex gap-10">
			<div>
				<img src={IMG_CDN_URL + cloudinaryImageId} alt="menu" />
				<h1>Restaurant id: {resId}</h1>
				<h2>{name}</h2>
				<h3>{locality}</h3>
			</div>
			<ul>
				{Object.values(restaurantInfo.menu.items).map((item) => (
					<li key={item.id}>
						{item.name} -
						<button
							className="bg-green-300 p-2 m-2 border border-green-500 rounded-md"
							onClick={() => handleAddItem(item)}
						>
							Add
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;

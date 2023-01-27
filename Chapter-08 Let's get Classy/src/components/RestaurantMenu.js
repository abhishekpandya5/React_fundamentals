import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DETAIL_URL, IMG_CDN_URL } from '../constant';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(DETAIL_URL + id);
		const json = await data.json();
		setRestaurantInfo(json?.data?.cards?.[0]?.card?.card?.info);
	}

	console.log(restaurantInfo);
	const { cloudinaryImageId, name, locality } = restaurantInfo || {};

	return !restaurantInfo ? (
		<Shimmer />
	) : (
		<div>
			<img src={IMG_CDN_URL + cloudinaryImageId} alt="menu" />
			<h1>Restaurant id: {id}</h1>
			<h2>{name}</h2>
			<h3>{locality}</h3>
		</div>
	);
};

export default RestaurantMenu;

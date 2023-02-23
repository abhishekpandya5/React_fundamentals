import { useEffect, useState } from 'react';
import { DETAIL_URL } from '../constant';

const useRestaurant = (restaurantId) => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(DETAIL_URL + restaurantId);
		const json = await data.json();
		setRestaurantInfo(json?.data);
	}

	return restaurantInfo;
};

export default useRestaurant;

import { API_URL } from '../constant';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function filterData(searchText, restaurants) {
	const filterData = restaurants.filter((restaurant) =>
		restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
	);
	return filterData;
}

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	// console.log(useState());

	useEffect(() => {
		getResturantsData();
	}, []);

	async function getResturantsData() {
		const data = await fetch(API_URL);
		const json = await data.json();
		setAllRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
	}

	function onInputChange(e) {
		setSearchText(e.target.value);
		if (e?.target?.value?.trim()?.length === 0) {
			setFilteredRestaurants(allRestaurants);
		}
	}

	function handleSearchSubmit(e) {
		e.preventDefault();
		if (searchText.trim().length === 0) return;
		const data = filterData(searchText, allRestaurants);
		setFilteredRestaurants(data);
	}

	return (
		<>
			<form className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={onInputChange}
				/>
				<button
					type="submit"
					className="search-btn"
					onClick={handleSearchSubmit}
				>
					Search
				</button>
			</form>

			<div className="restaurant-list">
				{allRestaurants?.length === 0 ? (
					Array(15)
						.fill('')
						.map((item, idx) => <Shimmer key={idx} />)
				) : filteredRestaurants?.length === 0 ? (
					<h1>No result found</h1>
				) : (
					filteredRestaurants?.map((restaurant) => {
						return (
							<Link
								to={`/restaurant/${restaurant.data.id}`}
								key={restaurant.data.id}
							>
								<RestaurantCard {...restaurant.data} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default Body;

/*
What is state? 
- State is basically a react variable which react keeps track of it for re-rendering of component.
what is React Hooks? 
- Normal JS functions
What is useState? 
- useState is hook for creating state variable so that react can kepp track of changes and render the UI. It also gives a set method to mutate the state.
*/

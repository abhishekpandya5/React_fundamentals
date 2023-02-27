import { API_URL } from '../constant';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useNetwork from '../utils/useNetwork';
import UserContext from '../utils/userContext';

const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');
	const isOnline = useNetwork();
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		getResturantsData();
	}, []);

	async function getResturantsData() {
		const data = await fetch(API_URL);
		const json = await data.json();
		const actualData = json?.data?.cards?.[2]?.data?.data?.cards;
		setAllRestaurants(actualData);
		setFilteredRestaurants(actualData);
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

	if (!isOnline) {
		return <h1>No internet connection</h1>;
	}

	return (
		<section>
			<form className="search-container my-5 bg-blue-200">
				<input
					type="text"
					data-testid="search-input"
					className="search-input px-4 py-1 m-2 border-blue-300 outline-none shadow-sm rounded"
					placeholder="Search"
					value={searchText}
					onChange={onInputChange}
				/>
				<button
					type="submit"
					data-testid="search-btn"
					className="search-btn px-4 py-1 m-2 border-solid border-2 border-blue-300 rounded"
					onClick={handleSearchSubmit}
				>
					Search
				</button>
				<input
					className="px-4 py-1 m-2 border-blue-300 outline-none shadow-sm rounded"
					type="text"
					value={user.name}
					onChange={(e) =>
						setUser({
							...user,
							name: e.target.value
						})
					}
				/>
				<input
					className="px-4 py-1 m-2 border-blue-300 outline-none shadow-sm rounded"
					type="text"
					value={user.email}
					onChange={(e) =>
						setUser({
							...user,
							email: e.target.value
						})
					}
				/>
			</form>
			<div
				className="restaurant-list flex justify-around flex-wrap"
				data-testid="restaurant-list"
			>
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
								className=""
								to={`/restaurant/${restaurant.data.id}`}
								key={restaurant.data.id}
							>
								<RestaurantCard {...restaurant.data} />
							</Link>
						);
					})
				)}
			</div>
		</section>
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

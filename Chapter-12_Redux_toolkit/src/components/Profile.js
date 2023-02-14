import { useEffect, useState } from 'react';

const Profile = (props) => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);
	// console.log('Profile functional render');

	useEffect(() => {
		// console.log('useEffect');
		const timer = setInterval(() => {
			console.log('function components');
		}, 1000);

		// Unmounting
		return () => {
			console.log('useEffect return');
			clearInterval(timer);
		};
	});

	useEffect(() => {
		//
	}, [count]);

	useEffect(() => {
		//
	}, [count2]);

	function handleCount() {
		setCount((prevCount) => prevCount + 1);
		setCount2((prevCount) => prevCount + 1);
	}

	return (
		<div>
			<h2>Profile Functional Component</h2>
			<p>
				This is the Profile page injected using outlet into the about us page.
			</p>
			<p>Created by {props.name}</p>
			<h3>Count: {count}</h3>
			<h3>Count2: {count2}</h3>
			<button onClick={handleCount}>Click</button>
		</div>
	);
};

export default Profile;

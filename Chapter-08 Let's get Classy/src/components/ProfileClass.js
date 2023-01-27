import React from 'react';

class Profile extends React.Component {
	constructor(props) {
		super(props);

		// create state
		this.state = {
			count: 0,
			count2: 0,
			userProfile: {}
		};

		console.log(this.props.name + ' child constructor');
	}

	async componentDidMount() {
		// this.timer = setInterval(() => {
		// 	console.log('class components');
		// }, 1000);

		const user = await fetch('https://api.github.com/users/abhishekpandya5');
		const data = await user.json();
		this.setState({ userProfile: data });

		console.log(this.props.name + ' child componentDidMount');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(this.props.name + ' child componentDidUpdate');
		if (this.state.count !== prevState.count) {
			console.log('update after state-props changes');
		}

		if (this.state.count2 !== prevState.count2) {
			// code
		}
	}

	componentWillUnmount() {
		console.log(this.props.name + ' child componentWillUnmount');
		clearInterval(this.timer);
	}

	handleCount() {
		// WE DO NOT MUTATE STATE DIRECTLY
		this.setState({
			count: ++this.state.count,
			count2: ++this.state.count2
		});
	}

	render() {
		console.log(this.props.name + ' child render');
		const {
			count,
			count2,
			userProfile: { name, bio, location, avatar_url }
		} = this.state;

		return (
			<div>
				<h2>Profile Class Component</h2>
				<p>Created by {this.props.name} child</p>
				<h3>Count: {count}</h3>
				<h3>Count2: {count2}</h3>
				<button onClick={this.handleCount.bind(this)}>Class click</button>
				<br />
				<br />
				<div>
					<img src={avatar_url} alt="avatar" />
					<p>Name: {name}</p>
					<p>About: {bio}</p>
					<p>Location: {location}</p>
				</div>
			</div>
		);
	}
}

export default Profile;

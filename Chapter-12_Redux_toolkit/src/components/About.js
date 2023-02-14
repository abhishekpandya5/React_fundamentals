import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileClassComponent from './ProfileClass';
import ProfileFunctionalComponent from './Profile';
import UserContext from '../utils/userContext';

class About extends Component {
	constructor(props) {
		super(props);
		console.log('parent contructor');
	}

	componentDidMount() {
		console.log('parent componentDidMount');
	}

	componentDidUpdate() {
		console.log('parent componentDidUpdate');
	}

	render() {
		console.log('parent render');
		return (
			<div>
				<h1>About Us Page</h1>
				<p>This is the About page</p>

				<UserContext.Consumer>
					{({user}) => <h4 className='font-bold text-3xl'>{user.name} - {user.email}</h4>}
				</UserContext.Consumer>
				
				<Outlet />
				<ProfileFunctionalComponent name={'Abhishek Pandya'} />
				<ProfileClassComponent name={'First'} />
				{/* <ProfileClassComponent name={'Second'} /> */}
			</div>
		);
	}
}

export default About;

/* 
With single child:

parent constructor
parent render
	child constructor
	child render
	child componentDidMount
parent componentDidMount

With two childs:

parent contructor
parent render
	First child constructor
	First child render
	Second child constructor
	Second child render
	First child componentDidMount
	Second child componentDidMount
parent componentDidMount
*/

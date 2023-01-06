import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.jpg';
import user from './assets/user.png';

// React Element
const HeaderExpression = (
	<div id="header">
		<span>Header Component</span>
	</div>
);

// React Component
const HeaderComponent1 = () => {
	return (
		<div id="header">
			<span>Header Component</span>
		</div>
	);
};

const HeaderComponent2 = function () {
	return (
		<header id="header">
			<span>Header Component</span>
		</header>
	);
};

const Title = () => <h1 id="title">Namaste React</h1>;

const data = 'Hellooooooooo React';

// Component Composition - if we use component inside a component
const HeaderComponent = () => (
	<div id="header">
		<Title />
		{Title()}
		<span>Header Component</span>
		<h2>{data}</h2>
		{/* data inside {} is safe from Cross Site Scripting attack, This is known as Sanitization */}
	</div>
);

const Header = () => (
	<header>
		<div id="logo">
			<img src={logo} alt="logo" />
		</div>
		<div id="search">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search anything"
			/>
		</div>
		<div id="avatar">
			<img src={user} alt="user" />
		</div>
	</header>
);

console.log('HeaderComponent', HeaderComponent());

const root = ReactDOM.createRoot(document.getElementById('root'));

// if it is variable or expression or React Element
// root.render(HeaderComponent);

// root.render(HeaderComponent()); // can also work as it is a function expression returning JSX
// root.render(<HeaderComponent />);
root.render(<Header />);

// Functional component name starts with Capital letter and its a convention only.

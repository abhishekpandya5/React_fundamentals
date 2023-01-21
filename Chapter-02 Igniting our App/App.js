import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
	'h1',
	{
		id: 'heading1',
		className: 'text',
		key: "h1"
	},
	'Heading1 from Parcel'
);

const heading2 = React.createElement(
	'h1',
	{
		id: 'heading2',
		className: 'text',
		style: { color: 'red' },
		key: "h2"
	},
	'Heading2'
);

const container = React.createElement(
	'div',
	{
		id: 'container',
		className: 'box',
		"hello": "world"
	},
	[heading1, heading2]
);

// console.log(heading1);
// console.log(heading2);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);

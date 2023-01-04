const heading1 = React.createElement(
	'h1',
	{
		id: 'heading1',
		class: 'text'
	},
	'Heading1'
);

const heading2 = React.createElement(
	'h1',
	{
		id: 'heading2',
		class: 'text',
		style: { color: 'red' }
	},
	'Heading2'
);

const container = React.createElement(
	'div',
	{
		id: 'container',
		class: 'box'
	},
	[heading1, heading2]
);

console.log(heading1);
console.log(heading2);

// passing a react element inside the root

const root = ReactDOM.createRoot(document.getElementById('root'));

// async render
root.render(container);

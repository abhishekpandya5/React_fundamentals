# `Learning React fundamentals`

<details>
<summary><h1>Chapter 01 - Inception</h1></summary>

## 1. What is Emmet?

> Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.
>
> > Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.`

---

## 2. Difference between a Library and Framework?

### Library:

- `A Library is a set of code that was previously written by a developer that you can call when you are building your project.`

- `In Library, you import or call specific methods that you need for your project.`

- `In simple words, a bunch of code packed together that can be used repeatedly is known as Library.`

- `Reusability is one of the main reasons to use libraries.`

### Framework:

- `A framework is a supporting structure that gives shape to your code.`

- `In the Framework, you have to fill the structure accordingly with your code.`

- `There is a specific structure for a particular framework that you have to follow, and it's generally more restrictive than Library.`

- `One thing to remember here is that frameworks sometimes get quite large, so they may also use the Library.`

### `Key Difference between Library vs Framework`

> The main key difference between the Library and Framework is something known as inversion of control. Let's understand this inversion of control more in detail.

- When you import a library, you have to call the specific methods or functions of your choice so, and it's up to you when and where to call the Library.

- Here, you are in charge of flow.

- On the other hand, Framework itself makes a call to your code and provide you with some space to write down details.

- So, while using framework your framework is in charge of flow.

- In Library, your code is going to call the Library whereas, in Framework, your code is being called by Framework.

---

## 3. What is CDN? Why do we use it?

> A `content delivery network` (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that you can access internet content from a web-enabled device or browser more quickly through a server near you.

---

## 4. Why is React known as React?

---

## 5. What is crossorigin in script tag?

---

## 6. What is diference between React and ReactDOM?

---

## 7. What is difference between react.development.js and react.production.js files via CDN?

---

## 8. What is async and defer?

---

</details>

<details>
<summary>
<h1>Chapter 02 - Igniting our App</h1>
</summary>

## 1. What is `NPM`?

> NPM is a package management tool. It has no specific full form but generally we call it Node Package Manager. As our project need a lot of resources to create, build, optimize and deploy to the server, for these we need different packages and tools which can be installed and imported from npm repositories.

> It alows to track package versions and updates with time.

---

## 2. What is `Parcel/Webpack`? Why do we need it?

---

</details>


🎓📚* React Interview Question (with Answer) Part - 5 * 🚀🔥

Question: How can you optimize React performance using code splitting?

👉 Answer: Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand. React.lazy and Suspense are used to achieve code splitting, which can significantly reduce the initial loading time of your application.

Code example using React.lazy and Suspense:

import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
 return (
  <Suspense fallback={<div>Loading...</div>}>
   <LazyComponent />
  </Suspense>
 );
};

--

How can you handle side effects in React using useEffect?

👉 Answer: The useEffect hook allows you to perform side effects in functional components. You can use it to handle tasks like data fetching, subscriptions, or manually changing the DOM.

Code example:
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  // Fetch data from an API
  fetch('https://lnkd.in/d5PWjfXF')
   .then((response) => response.json())
   .then((data) => setData(data));
 }, []);

 return (
  // Display data here
 );
};

--
Question: How can you handle form data in React components?

👉 Answer: You can manage form data using controlled components, where form elements are bound to state and updated through event handlers.

Code example of a controlled input:
import React, { useState } from 'react';

const MyForm = () => {
 const [inputValue, setInputValue] = useState('');

 const handleChange = (event) => {
  setInputValue(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission with 'inputValue'
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="text" value={inputValue} onChange={handleChange} />
   <button type="submit">Submit</button>
  </form>
 );
};



What is Props Drilling in React? How can you avoid that?

Props drilling in React refers to the process of passing props down through multiple levels of nested components. It happens when a component needs to pass data or functions to its child component, and then that child component needs to pass it further down to its own child component, and so on.

As the component hierarchy grows deeper, this can lead to passing props through several intermediate components, making the code less maintainable and potentially causing performance issues.

To avoid props drilling, you can use one of the following techniques:

0. React Context API: The Context API allows you to create a context that holds data or functions and make it available to all child components without explicitly passing it down as props. Components can access the context data directly from the provider.

1. Using State Management Library like Redux: Redux is a state management library that provides a centralized store accessible from any component. It allows components to retrieve and update data without the need to pass props through the entire component tree.


🎓📚* React Interview Questions (with Answers) Part - 4 * 🚀🔥

Question: What is React's Context API, and how can you use it to manage global state?
👉 Answer: React's Context API provides a way to pass data through the component tree without having to pass props manually at every level. It enables efficient global state management in applications, allowing components to access and update shared data.

Code Example:

// Creating a context
const MyContext = React.createContext();

// Using the context provider
const MyProvider = ({ children }) => {
 const [state, setState] = React.useState(initialState);
 return (
  <MyContext.Provider value={{ state, setState }}>
   {children}
  </MyContext.Provider>
 );
};

// Consuming the context in a component
const MyComponent = () => {
 const { state, setState } = React.useContext(MyContext);
 // Use state and setState here
};

--

Question: What are React Hooks, and how do they improve functional component functionality?

👉 Answer: React Hooks are functions that enable functional components to use state and other React features without writing a class. They make it easier to reuse logic and manage component state in functional components.

import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);

 const handleIncrement = () => {
  setCount(count + 1);
 };

 return (
  <div>
   <p>Count: {count}</p>
   <button onClick={handleIncrement}>Increment</button>
  </div>
 );
};

--

Question : What are React's controlled and uncontrolled components, and when should you use each?

👉 Answer: Controlled components have their state controlled by React through props and react to user input via event handlers. Uncontrolled components store their state internally in the DOM and are controlled by the DOM itself.

Code example of a controlled component:

import React, { useState } from 'react';

const MyInput = () => {
 const [value, setValue] = useState('');

 const handleChange = (event) => {
  setValue(event.target.value);
 };

 return (
  <input type="text" value={value} onChange={handleChange} />
 );
};

--

🎓📚* React Interview Questions (with Answers) Part - 3 * 🚀🔥

0. Question: How does React's Virtual DOM work, and what are its advantages over the real DOM?

👉 Answer: React's Virtual DOM is a lightweight copy of the actual DOM. When state changes, React creates a new Virtual DOM representation and compares it with the previous one. Only the differences are updated in the real DOM, reducing the need for expensive DOM manipulations.

--

1. Question: Explain the role of keys in React lists and why they are essential.

👉 Answer: Keys help React identify each list item uniquely and efficiently update and re-render components when the list changes. They improve performance by minimizing re-renders and avoiding issues like incorrect component recycling.

Code Example:

// Without keys
const itemsWithoutKeys = items. map((item) => <li>{item}</li>);

// With unique ids as keys
const itemsWithKeys = items. map((item) => <li key={items.id}>{item}</li>);

--

2. Question: Explain the concept of higher-order components (HOCs) in React.

👉 Answer: Higher-order components are functions that take a component as an input and return an enhanced component with additional props or functionality. They are commonly used for code reuse, logic abstraction, and cross-cutting concerns.

Code example:

const withLogger = (WrappedComponent) => {
 const EnhancedComponent = (props) => {
  console.log('Component props:', props);
  return <WrappedComponent {...props} />;
 };

 return EnhancedComponent;
};

// Usage
const MyComponent = (props) => {
 // Component logic here
};

export default withLogger(MyComponent);

--

3. Question: What is the significance of React Fragments, and when should you use them?

👉 Answer: React Fragments allow you to group multiple components without introducing an additional parent element in the DOM. They are useful when you need to return multiple elements from a component's render method.

Code example:

import React, { Fragment } from 'react';

const MyComponent = () => {
 return (
  <Fragment>
   <h1>Title</h1>
   <p>Paragraph 1</p>
   <p>Paragraph 2</p>
  </Fragment>
 );
};

--

0. What is Lifting State Up in React?
1. What is React context?
2. What are different ways to add CSS in your app?
3. What is Hot Module Replacement?
4. What is the use of Parcel, Vite, Webpack?
5. How does create-react-app work?

6. What is Tree Shaking?
7. Difference b/w dependency and devDependency
8. What is npx and npm?
9. Difference b/w package .json and package-lock .json
10. Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent());

11. What is React.Fragment?
12. What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
13. What if 2 components are given will the state change in one component will effect the other component’s state (child)?
14. What is the use of return in useEffect ?
15. Difference b/w client-side routing and server-side routing?

16. Explain the concept of code splitting and its benefits in React.
17. How does React handle routing and navigation?
18. What are higher-order components (HOC) in React?
19. What are controlled and uncontrolled components?
20. Explain the concept of reconciliation in React.

--

1. How does React Fiber improve performance in React applications?
2. Explain the concept of code splitting and its benefits in React.
3. What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?
4. Describe the concept of render props and its use cases in React.
5. How can you optimize the rendering of large lists in React?

6. Explain the concept of memoization and its importance in React.
7. What is the purpose of the useEffect() hook in React and how does it work?
8. How does React handle routing and navigation?
9. How can you handle asynchronous operations in React using async/await?
10. Explain the concept of the Context API in React and its benefits.

11. What is the role of higher-order components (HOC) in React and how can you implement them?
12. Describe the concept of controlled and uncontrolled components in React forms.
13. How does React handle state management in large-scale applications?
14. Explain the concept of suspense in React and its use cases.
15. What are the different ways to handle side effects in React using hooks?

16. Explain the concept of reconciliation in React.
17. How can you prevent unnecessary re-renders in React?
18. What are the different ways to style components in React?
19. What are the key considerations when implementing a scalable React application?
20. Describe the concept of reusability, modularity, testablity in React components.

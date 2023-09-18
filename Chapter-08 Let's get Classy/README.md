> Class based components have a mandatory render method.


> We cannot create class component without a render method.

First constructor is called, then render method
---
> What is render method? 
render() method returns some JSX.
---
> we do not mutate state directly.
---
### Why we make api calls inside componentDidMount or useEffect?
> Because first we render the dummy dom and then update the UI based on data. As componentDidMount calls after the first render

---

## React Life Cycle Methods:
> First parent lifecycle starts with parent constructor then parent render and on render if child encounters then child's life cycle starts first.
>> So, child constructor then child render then child componentDidMount (to complete the child's lifecycle first) and then parent componentDidMount.


---
### During Reconciliation there are two phases:

1. `Render phase` - Pure and has no side effects
2. `Commit phase` - Can work with DOM, run side effects

`Render phase` has constructor and render
In the `commit phase` react is actually updating the dom and componentDidMount is called.

When there are two children, react tries to batch the render phase and calls `constructor`  & `render` method of both child to load the initial HTML to the page. Then commit phase is called.

### `Render phase is fast`
First completes the render phase of all child

![image](https://github.com/abhishekpandya5/React_fundamentals/assets/30802411/252f0eb5-46bd-43a9-9908-a9bb5e430bce)


---

`componentDidMount` : calls after first render

When we make a api call inisde `componentDidMount`, our DOM is already mounted and we are now updating the DOM, so updating cycle begins and now `componentDidUpdate` triggers.

---

`componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

---

### Research topic -
### why super props constructor?
> super(props) is called to call the parent constructor i.e., Component constructor
> By extending React.Component class , we able to use the life cycle of the Component which can be used for mounting, updating and unmounting.
> Super() vs Super(props)
 - When we miss passing props inside 'super(),' it won’t assign props to this context and will be 'undefined' inside the constructor.
 - React under the hood
   ```
   const instance = new DefinedComponent(props);
   instance.props = props;
   ```
 - So, even if we don’t pass props to super(). React will still assign them right afterward. That’s why it works inside the render method and not in the constructor.
 - When you pass props to the 'super()' method in the constructor, the main difference will be accessing 'this.props' inside the constructor method.


---
### Why can i make componentDidMount async and not useEffect?
> useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

---
```
 ❌ Don't do this!

useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);
```

> We should use an async function inside the useEffect hook. There are two patterns you could use, an `immediately-invoked function expression` (my preferred approach), or a `named function` that you invoke. Let’s compare, and you can decide what you prefer.

```
// 🆗 
useEffect(() => {
  (async () => {
    const users = await fetchUsers();
    setUsers(users);
  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```

### Or you can go for a named function:

```
// 🆗 
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers(); // run it, run it

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```


> Either way, we’re now safe to use async functions inside useEffect hooks. Now if/when you want to return a cleanup function, it will get called and we also keep useEffect nice and clean and free from race conditions.


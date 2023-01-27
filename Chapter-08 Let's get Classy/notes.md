Class based components have a mandatory render method.

---
We cannot create class component without a render method.

---
What is render method? 
render() method returns some JSX.
---
why we write super(props) in constructor?
---
we do not mutate state directly.
---
Why we make api calls inside componentDidMount or useEffect?
Because first we render the dummy dom and then update the UI based on data. As componentDidMount calls after the first render

---

## React Life Cycle Methods:
### First parent lifecycle starts with parent constructor then parent render and on render if child encounters then child's life cycle starts first.
So, child constructor then child render then child componentDidMount (to complete the child's lifecycle first) and then parent componentDidMount.


---
### During Reconciliation there are two phases:

1. `Render phase` - Pure and has no side effects
2. `Commit phase` - Can work with DOM, run side effects

When there are two children, react tries to batch the render phase and calls `constructor`  & `render` method of both child to load the initial HTML to the page.

### `Render phase is fast`
First completes the render phase of all child

---

`componentDidMount` : calls after first render

When we make a api call inisde `componentDidMount`, our DOM is already mounted and we are now updating the DOM, so updating cycle begins and now `componentDidUpdate` triggers.

---


### Research topic -
### why super props constructor?
### Why can i make componentDidMount async and not useEffect?

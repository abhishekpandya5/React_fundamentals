## When to use context / redux?
- for small application using context is good.
- To avoid prop drilling, we use context. Any component can use or modify context.
- redux gives a proper way to handling, manage and modify data for Large Scale Big Application.

## Cons of Redux:
- Complex to setup
- complicated
- lot of boiler plate needs to be copy paste
- learning curve

## Redux tootlkit:

- We save all data in the form of slices in the redux store
  A slice is portion of a redux store.

- a component cannot update store directly. It need to dispatch a action.

- when we click on a plus button, it disptaches an action then it calls the reducer function and then reducer function will update the slice of the redux store.

### Selector:
- If we want to read from store, we use Selector
- When we use Selector, we are subscribing to the store.

### Packages Required: 
- @reduxjs/toolkit - core of redux
- react-redux - bridge between react and redux

---

We need a Provider which connects the redux to our App by providing store as prop

---

RTK- redux tool kit

---

- reducers contains a mapping of action and reducer funtion
- reducer function will modify the state
- action argument: the action which we will pass
- combine and export a single reducer
- we can directly modify the state inside reducer function


### Summary:

```
- create Store
  - configureStore() - RTK

- Provide my store to App
  - <Provider store={store}></Provider>   import from react-redux
  
- Create Slice 
  - using RTK 
  - createSlice({
      name: "",
      initialState: {},
      reducers: {
        addItem: (state, action) => { state = action.payload }  // do not return anything from here
      }
  });
  - export const { addItem, removeItem } = cartSlice.actions;
  - export default cartSlice.reducer;

- Put that slice into Store
  - {
    reducer: {
      cart: cartSlice,
      user: userReducer
    }
  }
  ```
  
- only subscribe to the specific portion of the store. This is major performance improvement.
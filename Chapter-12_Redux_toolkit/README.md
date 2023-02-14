## When to use context / redux?
- for small application using context is good
- redux gives a proper way to handling, manage and modify data for Large Scale Big Application

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


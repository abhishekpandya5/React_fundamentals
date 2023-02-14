UI Layer and Data Layer

UI layer  - everything we see on the browser (made using JSX)
 and Data Layer

JSX we write converts into big plane javascript object using Babel.
Babel converts JSX into javascript and then convert into objects (virtual DOM) for Reconciliation.
Two Virtual dom compares and a node which is changed only renders in the real DOM.
Diff is calculated and that diff is synced with the real DOM.

This whole UI layer is powered by the Data layer.

What does data layer consist of?
Data is manintained within the application using state and props.

There are more things along with State and Props.

State vs Props:

State: A local variable which has only scope within a component.
Props: If we have to pass data from one component to another then we use props.

PROPS DRILLING  passing data from parent to child and then to other child (chaining)
only upto 2 or 3 levels, props drilling is ok.
makes code cluttered.
re-renders all component in which props are passed.

Lifting the state Up:

taking control out of children and give to the parent to maintain a state and controls each and every child.




How to pass data from child to Parent?
1. use our custom hook



State and props: they are tied to a component

context is like h global useState for all the components


> Hooks are just normal functions.

> Custom Hooks:

> Why we build hooks?

- for modularity, reusability, readability
- seperation of concern, maintainable, testable

> Why we need custom hooks?
- We can wrap up a small logic and use it anywhere in the project.

> We do bundling of all our code but it can be done to a limit.
Bundling is done based on some logic and with multiple files.

> Different names for these bundling techniques:

- Chunking
- Code Spilitting
- Dynamic Bundling
- Lazy Loading
- On Demand Loading
- Dynamic Import


> When we load dynamic or on demand loading, react suspends the component loading if we don't use Suspense as component try to render before even it loads the chunk or bundle.

> Never ever load dynamic component inside another component
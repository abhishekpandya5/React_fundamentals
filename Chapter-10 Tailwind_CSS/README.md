Different ways of styling:

1. css
2. scss
3. inline css
4. styled component - to bring css into js file
5. Component Library like material UI, chakra, base UI, bootstrap

Tailwind CSS Framework
  - css on the go(in the same file)
  - reusability
  - less bundle css
  - flexible UI (very much customizable)

Pros:

1. Code is less
2. easy to use
3. easy to debug
4. less bundle size

Cons:

1. Initially it has a learning curve for new developers to write css fast
2. It somewhat makes code a little messy as there are so much classes written in one line.

Features:
1. In case we need to write custom css, we can use square bracket notation like w-[200px] to give a width of exact 200px.

Steps:
1. We installed tailwind and postcss as a dev dependency as mentioned in the documentation. Postcss is tool for transforming css with javascript.
It is used for compilation of classes. We need to tell the parcel we are using tailwind and it needs postcss to compile tailwind classes and convert into normal css which browser understands.

2. run -> npx tailwindcss init
It creates a tailwind.config.js file automatically.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

content: It tells what files will be using the tailwind classes.

3. Now create .postcssrc file to enable tailwind plugin. To tell the bundler (parcel) that while creating the build, compile our tailwind css into normal css.

4. update index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
It's a way to tell bundler that we  are using tailwind base, components and utilities classes.

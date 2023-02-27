### Why do we need test cases?

- Core reason of writing test cases is to check the existing code will not break when we add new features to the app.

- Optimizing,
- maintainability
- check error
- compatibility

are some reasons of writing test cases.

---

### Test Driven Development (TDD):

Write test cases even before writing code.

---

### Different types of testing:

- Manual Testing
- Automation Testing

  - Selecnium Testing (used with Java)

- E2E Testing - We will test the whole flow. Cyprus is used (simulate/covers the entire user's journey). they use a `headless browser`. Kind of a browser which has no UI. Replacing manual testing with code. With headless browser, `we can execute test case faster as it does not have to paint on the browser`.

- Unit Testing (core job of developer)
- Integration testing - (testing the integration btw the components)
- other types like Regression, Performance, Smoke testing, Load testing, etc.

---

- Earlier we use `Enzyme` for writing test cases.

- Now ,we are using `React Testing Library`
-  `Jest` - A delightful Javascript testing framework

- `React Testing Library is using Jest behind the scene, makes testing in react very efficient.`

### Steps To start:

1. Install React testing library by
   `npm install --save-dev @testing/library/react`

2. Install jest `npm i -D jest`

3. Configure Jest by `npx jest --init` (npx because we need to run it once) . It creates a jest config file. jsdom is a testing environment.

4. run -> `npm run test`. It gave us error to install "jest-environment-jsdom"
   to install it -> `npm i -D jest-environment-jsdom`

5. Create first test file
   create a folder under components directory by name `__tests__` (also known as dunder test).
   jest will consider all files in this folder as test files.
   sum.test.js or sum.spec.js or sum.test.ts (different conventions are there but we will use sum.test.js)
   Every test case should have a expectation, also known as asertion.

   ### example of a test case for sum function

```
- `sum.test.js`

test("check sum of 2 numbers", () => {
 expect(sum(2, 3)).toBe(5);
 expect(sum(-2, 3)).toBe(1);
 expect(sum(2, 5)).not.toBe(5);
 expect(sum()).toBe("Please check arguments");
})

- `sum.js`

export const sum = (a, b) => a + b;
```

6. Normal js file don't understand import keyword and we get error on running `npm run test` like `SyntaxError: Cannot use import statement outside a module`
   Setup Jest Babel config to solve the above error.
   install packages
   we can use either babel.config.js or .babelrc (create this file in the root level of project)
   Write in it:

```
{
	presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}
```

- babelrc requires JSON. So convert above configuration to JSON.

- JSON vs javascript object find out?

- Our tests are running in a different environment called jsdom (mini kind of a browser)

7. add coverage/ into .gitignore.

8. First write test case for Header:
## Unit Testing

```
import { render } from '@testing-library/react';
import Header from '../Header';

test("Logo should load on rendering header", () => {

	<!-- Load Header -->
	const header = render(<Header />);
	console.log(header);

	<!-- Check if logo is loaded -->

})
```

- It does not support JSX in test file, so to fix this we install one package with Babel. `@babel/preset-react` and write under preset in .babelrc file.
  `["@babel/preset-react", { "runtime": "automatic" }]` (take the runtime as automatic and preset react, make code compatible with react). Now code will understand JSX.

- Now, we get syntax error for Logo image. so we will ceate a dummy image. 
	- Create folder `mocks` under src, create a dummyLogo.js and write
  `export default "dummy.png"` - Now how to use this dummy image. Jest will help us. In the jest config file, set moduleNameMapper.
  when see any image replace it with dummy
  ```
  moduleNameMapper: {
  	"\\.(png|png|svg)$": "../mocks/dummyLogo.js"
  }
  ```

- Now error comes for Provider. So provide `Provider` and `store`.
- Provde Router to remove useRef error. `import {StaticRouter} from "react-router-dom/server"` this router can work without browser.
```
const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);
	const logo = header.getAllByTestId('logo');
	const onlineStatus = header.getByTestId('online-status');

	<!-- add data-testid="" to JSX to work above testing library functions -->
	```


9. One hacky way to check dom in jsdom env is misspelled the name inside getByTestId function.
```
---

## Integration Testing

1. Jest give a dummy function for using mocking fetch api of browser.
```
global.fetch = jest.fn(()=> {
	<!-- It returns a promise -->
	Promise.resolve({
		json: Promise.resolve(HARDCODE_API_DATA)
	})
});
```
fetch promise returns a readable stream and we convert it into a JSON. So we need to simulate the behaviour in jest also.
Reason of using two times Promise.resolve:
	- in fetch we write await two times
```
		await response;
		await response.json();

		await resolves a promise
```

- To use .toBeInTheDocument(), install `npm i -D @testing-library/jest-dom`

- waitFor()
- fireEvent
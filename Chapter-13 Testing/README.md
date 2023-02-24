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

### example of a test case for sum function

```
test("check sum of 2 numbers", () => {
 expect(sum(2, 3)).toBe(5);
 expect(sum(-2, 3)).toBe(1);
 expect(sum()).toBe("Please check arguments");
})


export const sum = (a, b) => a + b;
```

---

### Different types of testing:

- Manual Testing
- Automation Testing

  - Selecnium Testing (used with Java)

- E2E Testing - We will test the whole flow. Cyprus is used (simulate/covers the entire user's journey). they use a headless browser. Kind of a browser which has no UI. Replacing manual testing with code. With headless browser, we can execute test case faster as it does not have to paint on the browser.

- Unit Testing (core job of developer)
- Integration testing - (testing the integration btw the components)
- other types like Regression, Performance, Smoke testing, Load testing, etc.

---

We are using `Jest` - A delightful Javascript testing framework

`React Testing Library is using Jest behind the scene, makes testing in react very efficient.`

### Steps To start:

1. Install React testing library by
   npm install --save-dev @testing/library/react
2. Install npm i -D jest
3. Configure Jest by [npx jest --init] (npx because we need to run it once) . It creates a jest config file.
4. run -> npm run test gave use error to install "jest-environment-jsdom"
   to install it -> npm i -D jest-environment-jsdom
5. Create first test file
   create a folder under components directory by name **tests** (also known as dunder test).
   jest will consider all files in this folder as test files.
   sum.test.js or sum.spec.js or sum.test.ts (different conventions are there but we will use sum.test.js)

6. Configure Babel
   install packages
   we can use either babel.config.js or .babelrc (create this file in the root level of project)
   Write in it:

```
{
	presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}
```

- babelrc requires JSON

- JSON vs js object find out?

- also used

```
.toBe()
.notToBe()
```

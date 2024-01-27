# estdev-portfolio-react
# Q and A

## 1. NPM (Node Package Manager)
What is NPM?
NPM is a package manager for JavaScript that is widely used to manage and share reusable code packages. It facilitates the installation, sharing, and management of dependencies in JavaScript projects.

## 2. SPA (Single Page Application)
What is SPA?
SPA is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This leads to a more fluid and seamless user experience.

## 3. Event Loop
What is the event loop?
The event loop is a crucial concept in asynchronous programming. It manages the execution of code by continually checking the message queue for tasks. It allows non-blocking operations to run efficiently by handling tasks in a loop.

## 4. Difference between `export x` and `export default x`
What is the difference between export x and export default x? How do you import them differently?
- `export x` is used to export a named module, and you import it using `{ x }`.
- `export default x` is used to export a default module, and you import it using `import x from 'module'`.

## 5. Why use `className` instead of `class` in React
In React, `class` is a reserved keyword in JavaScript. To avoid conflicts, React uses `className` to define HTML class attributes in JSX.

## 6. Why not write `<button onClick={setCounter(counter + 1)}> +1 </button>`
This code will immediately invoke `setCounter` when rendered, not waiting for a click. It should be written as `<button onClick={() => setCounter(counter + 1)}> +1 </button>` to avoid immediate invocation.

## 7. Object Destructuring in React
What is object deconstruction and how is it connected to React components?

Object destructuring is a JavaScript feature where you can extract values from objects and bind them to variables. In React, it's often used in function parameters to destructure props directly. Example:
```jsx
const MyComponent = ({ prop1, prop2 }) => {
  // Use prop1 and prop2 here
};
```
## 8. Using HTML and JavaScript in React Components
How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

In React, you can write JavaScript expressions within curly braces `{}` in JSX. This allows you to embed JavaScript logic directly in your HTML-like JSX syntax.

## 9. Async/Await
What is async/await?

- Async/await is a syntax for handling asynchronous operations in a more readable and synchronous-like manner. Example:
     ```javascript
     const fetchData = async () => {
       const response = await fetch('https://api.example.com/data');
       const data = await response.json();
       console.log(data);
     };
     ```
## 10. Promise
What is a Promise?

- A Promise is an object representing the eventual completion or failure of an asynchronous operation. Example:
      ```javascript
      const fetchData = () => new Promise((resolve, reject) => {
        // Asynchronous operation
        if (success) {
          resolve(data);
        } else {
          reject(error);
        }
      });

      fetchData()
        .then(result => console.log(result))
        .catch(error => console.error(error));
      ```
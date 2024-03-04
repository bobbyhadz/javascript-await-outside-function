// Use await outside of an async function in JavaScript

// EXAMPLE 1 - Using an immediately invoked function expression

// 👇️ Example promise
const p = Promise.resolve('bobbyhadz.com');

(async () => {
  try {
    const value = await p;
    console.log(value); // 👉️ "bobbyhadz.com"
  } catch (err) {
    console.log(err);
  }
})();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using top-level await in Node.js

// const num = await Promise.resolve(42);
// console.log(num);

// ------------------------------------------------------------------

// // EXAMPLE 3 - With try/catch

// const p = Promise.resolve(42);

// try {
//   const num = await p;
//   console.log(num);
// } catch (err) {
//   console.log(err);
// }

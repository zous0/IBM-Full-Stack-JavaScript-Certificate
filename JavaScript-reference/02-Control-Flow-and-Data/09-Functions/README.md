# 09 — Functions

A **function** gives a name to a reusable piece of logic. Instead of calculating the same thing in several places, I define it once and call it when needed.

## Why this matters in a real project

In a shopping app, I might need to calculate a discount on the product page, in the cart, and at checkout. One function lets me reuse that rule.

## Declaration: define and call

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(50, 3);
console.log(total); // 150
```

- **Parameters**: `price`, `quantity` (names inside the definition).
- **Arguments**: `50`, `3` (actual values I pass).
- **`return`**: gives a value back to the caller.

## Three common ways to write functions

```js
// Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Expression
const greetAgain = function (name) {
  return `Hello, ${name}`;
};

// Arrow function
const greetShort = (name) => `Hello, ${name}`;
```

All three return a greeting in this example, but they aren't interchangeable in every situation (especially around `this` and how they are created).

## Default parameters

```js
function welcome(name = 'Guest') {
  return `Welcome, ${name}`;
}

console.log(welcome());       // Welcome, Guest
console.log(welcome('Sara')); // Welcome, Sara
```

## `return` vs `console.log()`

```js
function add(a, b) {
  console.log(a + b); // Prints; does not return the sum
}

const result = add(2, 3); // Prints 5
console.log(result);      // undefined
```

If another part of my program needs the answer, I usually **return** it.

## Common mistakes

- Calling a function without required arguments can produce `undefined` or `NaN`.
- Forgetting `return` when using `{}` in an arrow function: `(x) => { x * 2 }` returns `undefined`.
- Creating a huge function that handles several unrelated jobs makes debugging harder.

## When I *don't* need a new function

For a tiny operation used once, a new function name can add noise. I extract a function when the logic repeats or when a clear name makes the code easier to read.

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

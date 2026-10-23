# 11 — Array Methods

Array methods let me describe **what result I want** instead of manually managing a counter. They are especially useful when handling a list of products, tasks, or users.

## Pick the method based on your goal

| Method | Use it to... | Returns |
| --- | --- | --- |
| `forEach()` | Run an action for each item | `undefined` |
| `map()` | Transform every item | New array |
| `filter()` | Keep all matching items | New array |
| `find()` | Get the first matching item | Item or `undefined` |
| `some()` | Check if **any** item matches | Boolean |
| `every()` | Check if **all** items match | Boolean |
| `reduce()` | Combine items into one result | Accumulator (any type) |

## Real example: product prices

```js
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 700 },
  { name: 'Chair', price: 100 },
];

const names = products.map(product => product.name);
// ['Laptop', 'Phone', 'Chair']

const expensive = products.filter(product => product.price > 500);
// Laptop and Phone objects

const phone = products.find(product => product.name === 'Phone');
// { name: 'Phone', price: 700 }

const hasPremium = products.some(product => product.price > 900);
// true

const allPositive = products.every(product => product.price > 0);
// true

const total = products.reduce((sum, product) => sum + product.price, 0);
// 1800
```

`forEach()` is different: it performs an action but **doesn't produce a mapped array**.

```js
products.forEach(product => console.log(product.name));
```

## Mistakes I watch for

```js
// ❌ With braces, this callback never returns true/false:
products.filter(product => { product.price > 500; });

// ✅ Return explicitly, or remove the braces:
products.filter(product => product.price > 500);
```

- `find()` can return `undefined`. Check before reading properties of the result.
- `map()` doesn't change the original array by itself, although a callback *can* mutate objects inside it.
- `reduce()` is easier to reason about with an explicit initial value such as `0`.
- `every()` on an empty array returns `true`; `some()` on an empty array returns `false`.

## When I don't use them

A regular loop may be clearer when I need to stop early with `break` or carefully control each step. For side effects such as logging, `forEach()` or `for...of` can be clearer than `map()`.

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

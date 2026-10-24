# Functions

A function keeps code I want to use more than once in one place.

```js
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(50, 3)); // 150
```

`price` and `quantity` are parameters. `return` gives the result back; `console.log()` only prints it.

I use functions for things like calculating prices or formatting a message, instead of copying the same logic everywhere.

[Code](./example.js) | [Try it yourself](./PRACTICE.md)

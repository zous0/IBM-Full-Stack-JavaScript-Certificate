# Array methods

These methods make it easier to work with a list without writing a loop every time.

```js
const prices = [100, 500, 40];

console.log(prices.filter(price => price > 100)); // [500]
console.log(prices.map(price => price * 2));      // [200, 1000, 80]
```

- `filter()` keeps matching items.
- `map()` creates a new list.
- `find()` returns the first match (or `undefined`).
- `some()` and `every()` check conditions.
- `reduce()` combines values, like adding prices.

I choose the method based on the result I need, not just to make the code shorter.

[Code](./example.js) | [Try it yourself](./PRACTICE.md)

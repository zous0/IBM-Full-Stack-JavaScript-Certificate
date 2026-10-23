# Practice — Functions

1. Write `calculateArea(width, height)` and **return** the area. Test with `(4, 5)` → `20`.
2. Write `isAffordable(price, budget)` as an arrow function. Return `true` if the price is within budget.
3. Write `greet(name = 'Guest')` using a default parameter. Calling `greet()` should return `Hello, Guest`.

**Debug challenge:** Why does `double(4)` return `undefined`?

```js
const double = (number) => {
  number * 2;
};
```

**Hint:** An arrow function with braces needs an explicit `return`.

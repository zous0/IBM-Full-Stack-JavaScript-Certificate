# Practice — Array Methods

Use this array for all questions:

```js
const scores = [40, 85, 90, 55];
```

1. Use `map()` to add **5** to every score → `[45, 90, 95, 60]`.
2. Use `filter()` to keep scores **at least 60** → `[85, 90]`.
3. Use `reduce()` to calculate the total → `270`.
4. Use `find()` to get the first score greater than 80 → `85`.
5. Use `some()` to check if any score equals 100 → `false`.
6. Use `every()` to check if every score is at least 40 → `true`.

**Debug challenge:** Why is the result an array of `undefined`?

```js
const doubled = scores.map(score => {
  score * 2;
});
```

**Hint:** A block-bodied arrow function needs `return`.

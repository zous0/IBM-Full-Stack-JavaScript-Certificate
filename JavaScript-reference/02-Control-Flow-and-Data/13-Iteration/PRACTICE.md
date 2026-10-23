# Practice — Iteration

1. Use `for...of` to print every item in `['Run', 'Study', 'Sleep']`.
2. Use `for...in` on `{ name: 'Ali', age: 24 }` to print `name Ali` and `age 24`.
3. Repeat question 2 using `Object.entries()` and destructuring.
4. Use a classic `for` loop to print the **index and value** of `['a', 'b', 'c']`.

**Debug challenge:** Why does this print `0` and `1` rather than the words?

```js
const words = ['hello', 'world'];
for (const item in words) {
  console.log(item);
}
```

**Hint:** Which loop gives array *values*, not property keys?

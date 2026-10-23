# Practice — Arrays

1. Make an array `['HTML', 'CSS', 'JavaScript']`. Print its **first** and **last** values.
2. Use `push()` to add `'React'`, then `shift()` to remove the first value. Print the final array.
3. Starting from `[10, 20, 30, 40]`, use `slice()` to get `[20, 30]` without changing the original.

**Debug challenge:** Why is this `undefined`?

```js
const items = ['a', 'b', 'c'];
console.log(items[items.length]);
```

**Hint:** What is the last *index*, compared to the array *length*?

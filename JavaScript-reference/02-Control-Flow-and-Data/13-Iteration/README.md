# Iteration

Iteration means visiting the items in an array or object one at a time.

```js
const skills = ['HTML', 'CSS', 'JavaScript'];
for (const skill of skills) {
  console.log(skill);
}
```

`for...of` is handy for array values. `Object.entries()` gives key-value pairs from an object. A regular `for` loop is useful when I need the index too.

I try not to use `for...in` for arrays because it gives property keys, not the values directly.

[Code](./example.js) | [Try it yourself](./PRACTICE.md)

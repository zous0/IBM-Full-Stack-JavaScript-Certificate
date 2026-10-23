# 13 — Iteration

**Iteration** means visiting elements one at a time. In JavaScript, the approach depends on whether I'm working with an **array** or an **object**.

## `for...of`: get the values in an array

```js
const skills = ['HTML', 'CSS', 'JavaScript'];

for (const skill of skills) {
  console.log(skill);
}
// HTML, CSS, JavaScript
```

I use `for...of` when I want each value, without needing an index.

## `for...in`: get property names from an object

```js
const user = { name: 'Sara', city: 'Basra' };

for (const key in user) {
  console.log(key, user[key]);
}
// name Sara
// city Basra
```

`for...in` iterates enumerable property names, including inherited enumerable properties. For most plain data objects, I often prefer `Object.entries()` to explicitly work with the object's own pairs.

## `Object.entries()`: key and value together

```js
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

## Which option do I use?

| Situation | My choice |
| --- | --- |
| Read every array value | `for...of` |
| Need a numeric counter or index | `for` |
| Perform an action for each array item | `forEach()` or `for...of` |
| Produce a new array | `map()` |
| Visit object keys and values | `Object.entries()` + `for...of` |
| Visit an object's enumerable keys, including inherited ones | `for...in` when that behavior is intended |

## Common mistakes

- `for...in` on arrays gives **index keys** (`'0'`, `'1'`), not the array's values. Prefer `for...of` for array values.
- `for...of` doesn't directly iterate a plain object like `{ name: 'Sara' }`. Use `Object.entries()`, `Object.keys()`, or `Object.values()`.
- `map()` is for making a new array, not just logging values.

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

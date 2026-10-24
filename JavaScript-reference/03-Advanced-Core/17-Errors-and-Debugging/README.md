# 17 — Errors and Debugging

**What it is:** Debugging means finding out where and why code is failing.

**When I use it:** Any time an output looks wrong or an operation might fail.

My basic approach:

1. Read the error message and line number.
2. Check the actual values with `console.log()`.
3. Test the smallest part that might be wrong.
4. Use `try/catch` when an operation can fail and I need to handle it.

```js
function parseAge(input) {
  const age = Number(input);
  if (!Number.isFinite(age) || age < 0) {
    throw new Error("Enter a valid age");
  }
  return age;
}
```

[Run the example](./example.js): `node example.js`.

**Practice:** What happens if you pass `"hello"`? Why is a clear error message better than returning `NaN`?

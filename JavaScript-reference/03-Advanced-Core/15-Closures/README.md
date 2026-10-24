# 15 — Closures

**What it is:** A function can remember variables from the place where it was created, even after the outer function has finished running.

**When I use it:** When I want to keep some state private, like a counter or a small setting.

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const nextNumber = createCounter();
console.log(nextNumber()); // 1
console.log(nextNumber()); // 2
```

The `count` variable stays available to the returned function. I don't need a global variable.

[Try it](./example.js): `node example.js`.

**Practice:** Make a `createScore()` function that starts at 10 and adds 5 each time it's called.

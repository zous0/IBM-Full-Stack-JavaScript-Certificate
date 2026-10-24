# 20 — Async JavaScript

**What it is:** JavaScript can start a task and continue when the result is ready. A Promise represents a result that may arrive later.

**When I use it:** Network requests, delayed operations, and anything that takes time.

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function start() {
  console.log("Before");
  await wait(500);
  console.log("After");
}

start();
```

`await` pauses **this async function**, not the entire JavaScript program.

Run [example.js](./example.js) with `node example.js`.

**Practice:** Change 500 to 1000. Add one more `console.log()` before `await` and check the order.

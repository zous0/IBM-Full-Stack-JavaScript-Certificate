# 14 — Scope

**What it is:** Scope decides where a variable is available.

**When I use it:** Pretty much every time I write a function or a block with `if` or `for`.

`let` and `const` are block-scoped. A variable declared inside a function stays in that function. An inner function can read variables from its parent function.

```js
const appName = "Task List";

function showTask() {
  const taskName = "Study JavaScript";
  console.log(appName, taskName);
}

showTask();
// console.log(taskName); // Error: taskName is not defined here
```

[Run the full example](./example.js) with `node example.js` from this folder.

**Practice:** Declare a variable inside an `if` block using `let`. Try to use it outside the block. What happens, and why?

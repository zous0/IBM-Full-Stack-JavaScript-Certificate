# 08 — Loops

A **loop** runs some code repeatedly. Instead of writing the same instruction five times, I can explain how many times (or how long) it should run.

## When I use loops

- Show a numbered list of tasks.
- Retry an action while a condition is true.
- Go through several items one by one (see [Iteration](../13-Iteration/README.md)).

## `for`: when I have a counter

```js
for (let i = 1; i <= 3; i++) {
  console.log(`Task ${i}`);
}
// Task 1
// Task 2
// Task 3
```

Read it as: **start** at 1 → **continue while** `i <= 3` → **increase** `i` after each run.

## `while`: when I have a condition

```js
let attempts = 0;

while (attempts < 3) {
  attempts++;
  console.log(`Attempt ${attempts}`);
}
```

I use `while` when the number of repetitions depends on what happens during the loop. The condition is checked *before* each run.

## `do...while`: always run at least once

```js
let count = 0;
do {
  count++;
} while (count < 1);
console.log(count); // 1
```

Unlike `while`, the condition is checked *after* the first run.

## `break` vs `continue`

```js
for (let n = 1; n <= 5; n++) {
  if (n === 2) continue; // Skip 2
  if (n === 4) break;    // Stop completely at 4
  console.log(n);
}
// 1, 3
```

## Common mistakes

```js
// ❌ Off-by-one: prints 0, 1, 2 instead of 1, 2, 3
for (let i = 0; i < 3; i++) console.log(i);

// ❌ Infinite loop: 'n' never increases
// let n = 0;
// while (n < 3) { console.log(n); }
```

`<` and `<=` are not interchangeable. Check the first and last expected value. Make sure the condition can eventually become false.

## When I *don't* need a loop

If I want to transform an array into another array, `map()` often explains my intention better than a manual loop. See [Array Methods](../11-Array-Methods/README.md).

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

# Conditions

I use conditions when a program needs to make a decision.

```js
const price = 70;
const budget = 100;

if (price <= budget) {
  console.log('Within budget');
} else {
  console.log('Too expensive');
}
```

If I only need one of two values, a ternary can be shorter:

```js
const message = price <= budget ? 'Buy it' : 'Save up';
```

A `switch` is useful when I have several exact cases to check. For most simple decisions, I start with `if` and `else` because they're easier to read.

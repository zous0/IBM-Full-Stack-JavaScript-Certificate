# Operators

Operators let me calculate values or compare things.

```js
const price = 100;
const quantity = 2;

console.log(price * quantity);    // 200
console.log(price > 50);         // true
console.log(quantity === 2);     // true
console.log(price > 50 && quantity > 0); // true
```

A few useful ones:

- Math: `+`, `-`, `*`, `/`, `%`, `**`
- Update a value: `=`, `+=`, `-=`, `*=`, `/=`
- Compare: `===`, `!==`, `>`, `<`, `>=`, `<=`
- Logic: `&&` (and), `||` (or), `!` (not)

I usually use `===` instead of `==` so JavaScript doesn't quietly convert types during the comparison.

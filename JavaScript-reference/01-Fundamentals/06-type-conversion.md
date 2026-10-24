# Type conversion

Values from an HTML form usually arrive as strings. If I'm doing calculations, I need to turn the right values into numbers first.

```js
const ageInput = '25';
const priceInput = '49.99 USD';

const age = Number(ageInput);         // 25
const price = parseFloat(priceInput); // 49.99

console.log(age >= 18);              // true
console.log(price * 2);             // 99.98
```

- `Number('25')` gives `25`, but `Number('25px')` gives `NaN`.
- `parseInt('25px', 10)` gives `25`.
- `String(25)` gives `'25'`.
- `Boolean('')` gives `false`; `Boolean('0')` gives `true` because it's not empty.

Be careful with `+`: `'5' + 2` becomes `'52'`, not `7`. Also, `Number('abc')` is `NaN`, so real forms need proper input checks.

# Strings

Strings are text. I use them for names, messages, search terms, and form values.

```js
const message = '  Hello JavaScript  ';

console.log(message.trim());               // 'Hello JavaScript'
console.log(message.includes('JavaScript')); // true
console.log(message.toUpperCase());        // '  HELLO JAVASCRIPT  '
console.log(message.slice(2, 7));         // 'Hello'
```

Other methods I practice: `toLowerCase()`, `startsWith()`, `endsWith()`, `replace()`, and `split()`.

```js
const name = 'Ali';
console.log(`Hello, ${name}!`); // template literal
```

Strings can't be changed in place: methods like `trim()` return a new string.

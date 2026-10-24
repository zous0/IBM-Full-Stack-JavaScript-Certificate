# Data types

JavaScript values can be different types. These are the ones I use most often:

| Type | Example |
| --- | --- |
| String | `'Hello'` |
| Number | `25` |
| Boolean | `true` |
| Undefined | `let score;` |
| Null | `null` |
| Object | `{ name: 'Ali' }` |

Arrays are objects too. There are also `bigint` and `symbol` types, but I don't need them often yet.

```js
const name = 'Ali';
const age = 25;
const isDeveloper = true;
let salary;
const selectedUser = null;

console.log(typeof name);         // string
console.log(typeof age);          // number
console.log(typeof isDeveloper);  // boolean
console.log(typeof salary);       // undefined
console.log(typeof selectedUser); // object (an old JavaScript quirk)
```

I use `typeof` when I want to check the type of a value while debugging.

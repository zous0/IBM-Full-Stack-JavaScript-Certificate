# 10 — Arrays

An **array** is an ordered list of values. I use one when I have several related items, like names, prices, or products.

## Create and read an array

```js
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]);      // apple (index starts at 0)
console.log(fruits.length);  // 3 (number of items)
console.log(fruits[3]);      // undefined (not found)
```

## Update an item

```js
fruits[1] = 'mango';
console.log(fruits); // ['apple', 'mango', 'orange']
```

Even if an array is declared with `const`, its items can change. `const` prevents reassigning the variable to a different array.

## Common methods

| Method | What it does | Changes original? |
| --- | --- | --- |
| `push(item)` | Add to end | Yes |
| `pop()` | Remove and return last | Yes |
| `unshift(item)` | Add to start | Yes |
| `shift()` | Remove and return first | Yes |
| `slice(start, end)` | Copy a portion (`end` excluded) | No |
| `splice(start, count, ...items)` | Remove/insert at an index | Yes |

```js
const numbers = [10, 20, 30, 40];
const copied = numbers.slice(1, 3); // [20, 30]
numbers.splice(1, 1);              // numbers is now [10, 30, 40]
```

## Where this is useful

An e-commerce page might hold a list of product **objects** in one array. That lets me loop through them, filter them, and show them on screen.

## Common mistakes

- Treating the first index as `1` instead of `0`.
- Using `arr[arr.length]` to get the last item (that's one position past the end). Use `arr[arr.length - 1]`.
- Assuming `splice()` works like `slice()`—`splice()` changes the original array.

## When an array isn't the best fit

If I want to describe **one item** with named fields (name, price, category), an [object](../12-Objects/README.md) is better. I often use **an array of objects** for a list of items.

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

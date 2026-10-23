# Quick Reference — Control Flow & Data

I use this page when I remember the concept but forget which syntax fits the problem.

| Need to... | Use | Example |
| --- | --- | --- |
| Repeat a known number of times | `for` | `for (let i = 0; i < 3; i++)` |
| Repeat while something is true | `while` | `while (attempts < 3)` |
| Run once, then check a condition | `do...while` | `do { ... } while (ready)` |
| Stop a loop early | `break` | `if (found) break;` |
| Skip this loop iteration | `continue` | `if (item === null) continue;` |
| Package reusable logic | `function` | `function add(a, b) { return a + b; }` |
| Store an ordered list | Array `[]` | `const names = ["Ali", "Sara"];` |
| Add one item at the end | `.push()` | `names.push("Noor")` |
| Make a new list of transformed values | `.map()` | `prices.map(p => p * 2)` |
| Keep matching items | `.filter()` | `prices.filter(p => p > 100)` |
| Get the first match | `.find()` | `users.find(u => u.id === 2)` |
| Check if at least one item matches | `.some()` | `prices.some(p => p > 500)` |
| Check whether all items match | `.every()` | `prices.every(p => p > 0)` |
| Combine values into one result | `.reduce()` | `prices.reduce((sum, p) => sum + p, 0)` |
| Describe a single record | Object `{}` | `const user = { name: "Ali" }` |
| Read a known property | Dot notation | `user.name` |
| Read a dynamic property | Bracket notation | `user[key]` |
| Visit array values | `for...of` | `for (const p of prices)` |
| Visit object key/value pairs | `Object.entries()` | `for (const [k, v] of Object.entries(user))` |

## Quick reminders

- Array indexes start at `0`; `array.length` is the number of items.
- `map()` and `filter()` return **new arrays**. `forEach()` doesn't return a transformed array.
- `find()` returns one matching item or `undefined`; `filter()` returns an array.
- `slice()` does not change the original array; `splice()` does.
- In a function, `return` sends a value back; `console.log()` just prints it.
- In a `for` loop, check that the counter eventually makes the condition false.
- For object properties, bracket notation uses a variable's **value**, e.g. `user[key]`.
- When summing with `reduce()`, give an initial value like `0`.

See the six topic README files for explanations and runnable examples.

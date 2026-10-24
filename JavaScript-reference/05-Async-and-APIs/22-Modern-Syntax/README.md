# 22 — Modern JavaScript Syntax

**What it is:** Shorter syntax for things JavaScript developers do often.

**When I use it:** Reading API responses, handling object settings, creating new arrays, and writing small callbacks.

| Syntax | Why I use it |
| --- | --- |
| `const { name } = user` | Take a property from an object |
| `const [first] = items` | Take an item from an array |
| `[...items, newItem]` | Make a new array without changing the original |
| `(...numbers) => {}` | Accept any number of arguments |
| `user?.address?.city` | Avoid an error when a property is missing |
| `value ?? "default"` | Use a fallback only for `null` or `undefined` |

**One mistake to avoid:** `||` and `??` are not the same. `0 || 10` gives 10, but `0 ?? 10` gives 0.

Run [example.js](./example.js) with `node example.js`.

**Practice:** Make a copy of a product object with an updated price using object spread.

# Loops

Loops repeat a piece of code. I use a `for` loop when I know how many times something should run, and a `while` loop when it depends on a condition.

```js
for (let attempt = 1; attempt <= 3; attempt++) {
  console.log(`Attempt ${attempt}`);
}
```

This prints three lines. The important part is making sure the loop eventually stops. `break` stops a loop early, and `continue` skips to the next round.

I don't always need a loop. For example, `filter()` is often clearer when I just need certain items from an array.

[Code](./example.js) | [Try it yourself](./PRACTICE.md)

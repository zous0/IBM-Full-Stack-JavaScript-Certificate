# Practice — Objects

1. Create a `book` object with `title`, `author`, and `pages`. Print the title.
2. Add a `published` property and then update it to `true`.
3. Create a `user` object with `profile: { city: 'Basra' }`. Print the city.
4. Destructure `title` and `pages` from `book` into variables.
5. Make a shallow copy of `book` using spread, but change `pages` only in the copy.

**Debug challenge:** Why does this throw a `ReferenceError`?

```js
const book = { title: 'Clean Code' };
console.log(book[title]);
```

**Hint:** Is `title` a variable, or should it be a string property name?

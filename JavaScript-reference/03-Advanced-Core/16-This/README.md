# 16 — `this`

**What it is:** In a regular object method, `this` usually refers to the object that called the method.

**When I use it:** When a method needs to read or update properties on its own object.

```js
const user = {
  name: "Alex",
  sayHello() {
    return `Hi, ${this.name}`;
  },
};

console.log(user.sayHello()); // Hi, Alex
```

**Important:** Arrow functions don't create their own `this`. I avoid them for object methods that need `this`.

[Run the example](./example.js): `node example.js`.

**Practice:** Add an `age` property and a `getDetails()` method to the object.

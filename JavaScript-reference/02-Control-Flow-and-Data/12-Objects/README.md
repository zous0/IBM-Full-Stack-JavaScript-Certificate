# 12 — Objects

An **object** stores related information as named **properties**. I use one to describe a user, product, order, or any single thing with multiple details.

## Create and access an object

```js
const product = {
  name: 'Laptop',
  price: 1000,
  category: 'electronics',
};

console.log(product.name);       // Laptop
console.log(product['price']);   // 1000
```

Use `product.name` for a known property. Use `product[key]` if the property name is held in a variable:

```js
const key = 'category';
console.log(product[key]); // electronics
```

## Update properties and write methods

```js
product.price = 950;

const user = {
  name: 'Sara',
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(user.greet()); // Hi, I'm Sara
```

A **method** is a function stored on an object. In this method call, `this` refers to `user`.

## Nested objects, destructuring, and spread

```js
const order = {
  id: 10,
  shipping: { city: 'Basra' },
};
console.log(order.shipping.city); // Basra

const { name, price } = product; // Read into variables
const discounted = { ...product, price: 800 }; // New object
```

Spreading an object makes a **shallow copy**: nested objects are still shared unless I copy them separately.

## Arrays vs objects

- Array → a **list** of products.
- Object → **one** product with properties.
- Array of objects → the common pattern in real apps.

```js
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Chair', price: 100 },
];
```

## Common mistakes

- `product['name']` and `product.name` work; `product[name]` only works if `name` is a defined variable.
- Reading a missing property returns `undefined`.
- Copying with `{ ...product }` doesn't deeply clone nested data.

**Try it:** [Run the example](./example.js) · [Practice questions](./PRACTICE.md)

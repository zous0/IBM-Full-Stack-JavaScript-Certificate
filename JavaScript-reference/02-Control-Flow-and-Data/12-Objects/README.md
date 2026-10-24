# Objects

An object stores related values using names instead of numbered positions.

```js
const product = { name: 'Laptop', price: 1000 };
console.log(product.name); // Laptop

product.price = 900;
```

Dot notation (`product.name`) is good for a known property. Brackets (`product[key]`) help when the property name is stored in a variable.

I use objects for products, users, orders, and other things with several details.

[Code](./example.js) | [Try it yourself](./PRACTICE.md)

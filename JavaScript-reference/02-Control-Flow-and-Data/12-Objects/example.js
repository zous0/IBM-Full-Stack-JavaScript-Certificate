// Run: node 12-Objects/example.js
const product = {
  name: 'Laptop',
  price: 1000,
  category: 'electronics',
};

console.log('Dot:', product.name);
const field = 'price';
console.log('Dynamic key:', product[field]);

product.price = 950;
console.log('Updated product:', product);

const user = {
  name: 'Sara',
  greet() {
    return `Hello, ${this.name}`;
  },
};
console.log(user.greet());

const order = { id: 1, shipping: { city: 'Basra' } };
console.log('Nested property:', order.shipping.city);

const { name, price } = product;
console.log('Destructured:', name, price);

const discounted = { ...product, price: 800 };
console.log('Original price:', product.price);
console.log('Copy price:', discounted.price);

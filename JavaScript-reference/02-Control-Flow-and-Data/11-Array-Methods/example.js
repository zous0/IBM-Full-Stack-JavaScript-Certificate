// Run: node 11-array-methods/example.js
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 700 },
  { name: 'Chair', price: 100 },
];

console.log('forEach: all product names');
products.forEach(product => console.log(product.name));

console.log('map:', products.map(product => product.name));
console.log('filter:', products.filter(product => product.price > 500));
console.log('find:', products.find(product => product.name === 'Phone'));
console.log('some:', products.some(product => product.price > 900));
console.log('every:', products.every(product => product.price > 0));
console.log('reduce:', products.reduce((sum, product) => sum + product.price, 0));

console.log('find missing:', products.find(product => product.name === 'Tablet')); // undefined

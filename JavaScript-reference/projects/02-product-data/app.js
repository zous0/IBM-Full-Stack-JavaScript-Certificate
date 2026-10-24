// Run: node mini-project/product-data.js
// A small product-data exercise using arrays, objects, loops, and functions.

const products = [
  { name: 'Laptop', price: 1000, category: 'electronics' },
  { name: 'Phone', price: 700, category: 'electronics' },
  { name: 'Chair', price: 100, category: 'furniture' },
];

function formatProduct(product) {
  return `${product.name} — $${product.price} (${product.category})`;
}

console.log('1) All products');
for (const product of products) {
  console.log(formatProduct(product));
}

console.log('\n2) Products over $500');
const expensiveProducts = products.filter(product => product.price > 500);
for (const product of expensiveProducts) {
  console.log(formatProduct(product));
}

console.log('\n3) Product names');
const productNames = products.map(product => product.name);
console.log(productNames);

console.log('\n4) Find Phone');
const selectedProduct = products.find(product => product.name === 'Phone');
console.log(selectedProduct ? formatProduct(selectedProduct) : 'Product not found');

console.log('\n5) Total price');
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(`$${totalPrice}`);

console.log('\n6) Any product over $900?');
const hasPremiumProduct = products.some(product => product.price > 900);
console.log(hasPremiumProduct);

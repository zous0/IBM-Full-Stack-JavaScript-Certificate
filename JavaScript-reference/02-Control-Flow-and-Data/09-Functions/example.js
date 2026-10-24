// Run: node 09-functions/example.js
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log('Total:', calculateTotal(50, 3)); // 150

const addTax = function (amount, rate = 0.1) {
  return amount + amount * rate;
};
console.log('With tax:', addTax(100)); // 110

const makeLabel = (name, price) => `${name}: $${price}`;
console.log(makeLabel('Laptop', 1000));

function printMessage(message) {
  console.log(message); // No returned value
}
const returned = printMessage('This function only prints.');
console.log('Returned value:', returned); // undefined

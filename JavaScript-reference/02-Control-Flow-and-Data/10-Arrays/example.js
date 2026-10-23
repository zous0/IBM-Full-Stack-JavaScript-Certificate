// Run: node 10-Arrays/example.js
const fruits = ['apple', 'banana', 'orange'];
console.log('First fruit:', fruits[0]);
console.log('Length:', fruits.length);

fruits[1] = 'mango';
fruits.push('grape');
console.log('After update + push:', fruits);

const lastFruit = fruits.pop();
console.log('Removed from the end:', lastFruit);

fruits.unshift('kiwi');
const firstFruit = fruits.shift();
console.log('Added and then removed:', firstFruit);

console.log('Slice copy:', fruits.slice(0, 2)); // Does not mutate
fruits.splice(1, 1, 'pear'); // Mutates the original
console.log('After splice:', fruits);

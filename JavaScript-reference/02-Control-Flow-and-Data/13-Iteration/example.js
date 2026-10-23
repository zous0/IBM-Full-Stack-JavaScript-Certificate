// Run: node 13-Iteration/example.js
const skills = ['HTML', 'CSS', 'JavaScript'];
console.log('for...of over array values:');
for (const skill of skills) {
  console.log(skill);
}

const user = { name: 'Sara', city: 'Basra' };
console.log('\nfor...in over object keys:');
for (const key in user) {
  if (!Object.hasOwn(user, key)) continue;
  console.log(key, user[key]);
}

console.log('\nObject.entries() over own keys and values:');
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

console.log('\nClassic for loop when the index matters:');
for (let index = 0; index < skills.length; index++) {
  console.log(index, skills[index]);
}

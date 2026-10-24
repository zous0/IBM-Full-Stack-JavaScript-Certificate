// Run: node 08-loops/example.js
console.log('FOR: numbered tasks');
for (let number = 1; number <= 3; number++) {
  console.log(`Task ${number}`);
}

console.log('\nWHILE: limited attempts');
let attempts = 0;
while (attempts < 3) {
  attempts++;
  console.log(`Attempt ${attempts}`);
}

console.log('\nDO...WHILE: run at least once');
let checks = 0;
do {
  checks++;
  console.log(`Check ${checks}`);
} while (checks < 1);

console.log('\nCONTINUE / BREAK');
for (let id = 1; id <= 6; id++) {
  if (id === 2) continue; // Ignore id 2
  if (id === 5) break;    // Stop before id 5
  console.log(`Processing ${id}`);
}

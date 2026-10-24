const user = {
  name: "Alex",
  points: 5,
  addPoints(amount) {
    this.points += amount;
    return this.points;
  },
};

console.log(user.addPoints(3)); // 8
console.log(user.points); // 8

// Arrow functions do not have their own `this`.
// For simple object methods, regular method syntax is clearer.

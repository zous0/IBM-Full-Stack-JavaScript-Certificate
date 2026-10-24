function createCounter(start = 0) {
  let count = start;

  return function () {
    count += 1;
    return count;
  };
}

const clicks = createCounter();
console.log(clicks()); // 1
console.log(clicks()); // 2

const pageViews = createCounter(10);
console.log(pageViews()); // 11 (separate counter)
console.log(clicks()); // 3

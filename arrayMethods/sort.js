//sort

const numbers = [15, 3, 8, 22, 1, 45];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [ 1, 3, 8, 15, 22, 45 ]

const numbers2 = [5, 12, 8, 20, 3];
const sortedNumbers2 = numbers2.sort((a, b) => b -a);
console.log(sortedNumbers2);

const numbers3 = [12, -5, 3, -8, 0, 15, -2];
const positiveNumbers3 = numbers3.filter(num => num > 0)
const sortedPositiveNumbers3 = positiveNumbers3.sort((a, b) => a - b);
console.log(sortedPositiveNumbers3); // [ 3, 12, 15 ]
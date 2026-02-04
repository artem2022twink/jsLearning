// every()

const numbers = [2, 4, 6, 8];
const everyEven = nums.every(num => num % 2 === 0);
console.log(everyEven); // true

const ages = [20, 25, 30, 18];
const allAdilts = ages.every(age => age >= 18);
console.log(allAdilts); // true

const numbers2 = [5, 10, 15, 3];
const allBig = numbers2.every(num => num > 10);
console.log(allBig); // false
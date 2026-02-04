// some()

const numbers = [1, 3, 5, 8, 10];
const hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven); // true

const ages = [15, 16, 17, 14];
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // false

const words = ['кот', 'собака', 'слон'];
const hasLongWords = words.some(word => word.length > 5);
console.log(hasLongWords); // true
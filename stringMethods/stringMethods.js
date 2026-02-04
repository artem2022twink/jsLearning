// split()

const text = "JavaScript это круто";
const words = text.split(" ");
console.log(words); // [ "JavaScript", "это", "круто" ]

const text2 = "a,b,c,d";
const words2 = text2.split(",");
console.log(words2); // [ "a", "b", "c", "d" ]

const word = "привет";
const word3 = word.split("");
console.log(word3); // [ "п", "р", "и", "в", "е", "т" ]

// join()

const words4 = ['JavaScript', 'это', 'круто'];
const joinWords = words4.join(" ");
console.log(joinWords); // JavaScript это круто

// trim()

const text3 = "   привет   ";
console.log(text3.trim()); // привет

//or

const text4 = "   привет   "
const clean = text4.trim();
console.log(clean); // привет

// toLowerCase & toUpperCase

const word5 = "JaVaScRiPt"
const lower = word5.toLowerCase();
console.log(lower); // javascript
const upper = word5.toUpperCase();
console.log(upper); // JAVASCRIPT

// replace()

const text6 = "Я учу Python";
const replaced = text6.replace("Python", "Javascript");
console.log(replaced); // Я учу Javascript

const text7 = "кот кот кот";
const replaceFirst = text7.replace("кот", "пёс");
const replaceAll = text7.replaceAll("кот", "пёс");
console.log(replaceFirst); // пёс кот кот
console.log(replaceAll); // пёс пёс пёс

// slice()

const text8 = "JavaScript";
console.log(text8.slice(0, 4)); // Java
console.log(text8.slice(4)); // Script
console.log(text8.slice(-6)); // Script
const sentence = "Я учу JavaScript и мне нравится";
const words = sentence.split(" ");
console.log(words);

const words2 = ['Node', 'js', 'это', 'круто'];
const sentence2 = words2.join(" ");
console.log(sentence2);

const input = "   JavaScript   ";
console.log(input.trim());

const text = "иван";
console.log(`${text[0].toUpperCase()}${text.slice(1)}`);

const text2 = "Я люблю Python программирование";
console.log(text2.replace(`Python`, `JavaScript`));

const text3 = "JavaScript это мощный язык программирования";
console.log(text3.split(' ').length);
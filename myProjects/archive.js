// генерация нового массива с оценками

const generateNewMarksArray = (mark => {
    resultArray = [];
    for (let i = 0; i <= 10; i++) {
        mark = (Math.floor(Math.random() * 4)) +2;
        resultArray.push(mark);
    }

    return resultArray;
})

//сделать более аккуратно

const userMarks = generateNewMarksArray();

console.log(`=== итоговые оценки за четверть по информатике ===`);
console.log(userMarks);

// функции для вывода количества каждой оценки

// двойки

const filter2 = userMarks.filter(mark => mark === 2);
const count2 = filter2.reduce((counter, mark) => {
    return counter += mark / 2
}, 0)
console.log(`коллиство двоек - ${count2}`);

// тройки

const filter3 = userMarks.filter(mark => mark === 3);
const count3 = filter3.reduce((counter, mark) => {
    return counter += mark / 3
}, 0)
console.log(`коллиство троек - ${count3}`);

// четверки

const filter4 = userMarks.filter(mark => mark === 4);
const count4 = filter4.reduce((counter, mark) => {
    return counter += mark / 4
}, 0)
console.log(`коллиство четверок - ${count4}`);

// пятерки

const filter5 = userMarks.filter(mark => mark === 5);
const count5 = filter5.reduce((counter, mark) => {
    return counter += mark / 5
}, 0)
console.log(`коллиство пятерок - ${count5}`);

// среднее арифметическое

const mathSimpleAverage = (userMarks => {
    let sum = 0;

    for (const value of userMarks) {
        sum += value;
    }

    return sum / userMarks.length
})

// вывести

const simpleAverage = mathSimpleAverage(userMarks);
console.log(`ваша средняя арефмитическая - ${simpleAverage}`);

const filterMark = (marks, mark) => {
    let filteredMarks = marks.filter(num => num > mark);
    const filteredMarksToString = filteredMarks.toString();
    return console.log(`все оценки выше ${mark} - ${filteredMarksToString}`);
}
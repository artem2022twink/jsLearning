// приветствие

prompt('Отчет об успеваемости по информатике, для перехода к отчету нажмите enter')
console.log('Показать список комманд - help()')
console.log('Очистить консоль - clear()')

const help = () => {
    console.log('=== СПИСОК КОММАНД ===');
    console.log('--- Поиск и фильтрация ---')
    console.log('Вывести все оценки по информатике - showAll(marks)');
    console.log('Найти первую конкретную оценку - findFirstMark(marks, интересующая вас оценка)');
    console.log('Найти колличество определенных оценок - findMarkIndex(marks, интересующая вас оценка)');
    console.log('Отфильтровать все оценки выше заданного значения - filterMarks(marks, интересующая вас оценка)');
    console.log('--- Проверка условий ---');
    console.log('Проверить, есть ли хоть одна интересующая вас оценка - find(marks, интересующая вас оценка)');
    console.log('Проверить, все ли оценки выше какого-то значения - findUpper(marks, интересующая вас оценка)');
    console.log('--- Преобразования ---');
    console.log('Показать все оценки увеличенные на 1 - plusOne(marks)');
    console.log('Показать все оценки уменьшенные на 1 - minusOne(marks)');
    console.log('--- Счёт и статистика ---');
    console.log('Посчитать сумму всех оценок - mathSum(marks)');
    console.log('Посчитать среднюю оценку - mathAverage(marks)');
    console.log('Показать максимальную оценку - showMax(marks)');
    console.log('Показать минимальную оценку - showMin(marks)');
    console.log('--- Сортировка ---');
    console.log('Сортировка оценок по убыванию - showLower(marks)');
    console.log('Сортировка оценок по возрастанию - showUpper(marks)');
}

// генерация нового массива с оценками

const generateNewMarksArray = (mark => {
    let resultArray = [];
    for (let i = 0; i < 3; i++) {
        mark = (Math.floor(Math.random() * 4)) +2;
        resultArray.push(mark);
    }

    return resultArray;
})

const marks = generateNewMarksArray()

// Вывести все оценки по информатике

const showAll = (marks => {
    return console.log(`Ваши оценки по информатике - ${marks.toString()}`);
})

// Найти первую конкретную оценку

const findFirstMark = ((marks, mark) => {
    let randomDate = Math.floor(Math.random() * 31);
    let firstMark = marks.find(num => num === mark);
    return console.log(`Ваша первая ${firstMark} была получена ${randomDate} апреля 2025 года`);
})

// Найти колличество определенных оценок

const findMarkIndex = (marks, mark) => {
    let marksCounter = marks.reduce((counter, num) => {
        if (num === mark) {
            counter++;
        }
        return counter;
    }, 0)

    return console.log(`количество оценок ${mark}: ${marksCounter}`);
}

// Отфильтровать все оценки выше заданного значения

const filterMarks = (marks, mark) => {
    const upper = marks.filter(num => num > mark);
    
    if (upper == false) {
        return console.log(`Ошибка! у вас нет оценок выше ${mark}`);
    } else {
        return console.log(`Все оценки выше ${mark}: ${upper}`);
    }
}

// Проверить, есть ли хоть одна интересующая вас оценка

const find = (marks, mark) => {
    const finded = marks.find(num => num === mark);

    if (finded == undefined) {
        return console.log(`У вас нет ни одной оценки ${mark}`)
    } else {
        return console.log(`У вас есть хотя бы одна ${mark}`)
    }
}

// Проверить, все ли оценки выше какого-то значения

const findUpper = (marks, mark) => {
    const upper = marks.every(num => num > mark);

    if (upper == false) {
        return console.log(`Ошибка! не все оценки выше ${mark}`);
    } else {
        return console.log(`Отлично! все оценки выше ${mark}`);
    }
}

// Показать все оценки увеличенные на 1 - plusOne(marks)

const plusOne = (marks) => {
    const result = marks.map(num => num + 1);
    return console.log(`Все оценки увеличенные на 1: ${result}`);
}

// Показать все оценки уменьшенные на 1 - minusOne(marks)

const minusOne = (marks) => {
    const result = marks.map(num => num - 1);
    return console.log(`Все оценки уменьшенные на 1: ${result}`);
}

// Посчитать сумму всех оценок - mathSum(marks)

const mathSum = (marks) => {
    return marks.reduce((sum, num) => sum + num, 0);
}

// Посчитать среднюю оценку - mathAverage(marks)

const mathAverage = (marks) => {
    const average = marks.reduce((sum, num) => sum += num, 0);
    return console.log(`Ваша средняя оценка: ${average / marks.length}`);
}

// Показать максимальную оценку - showMax(marks)

const showMax = (marks) => {
    let max = marks.reduce((max, num) => num > max ? num : max, marks[0]);
    return console.log(`Ваша максиммальная оценка: ${max}`);
}

// Показать минимальную оценку - showMin(marks)

const showMin = (marks) => {
    let min = marks.reduce((min, num) => num < min ? num : min, marks[0]);
    return console.log(`Ваша минимальная оценка: ${min}`);
}

// Сортировка оценок по убыванию - showLower(marks)

const showLower = (marks) => {
    let sorted = [...marks].sort((a, b) => b - a);
    return console.log(`Сортировка оценок по убыванию: ${sorted}`);
}

// Сортировка оценок по возрастанию - showUpper(marks)

const showUpper = (marks) => {
    let sorted = [...marks].sort((a, b) => a - b);
    return console.log(`Сортировка оценок по возрастанию: ${sorted}`);
}
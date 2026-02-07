// приветствие

prompt('Отчет об успеваемости по информатике, для перехода к отчету нажмите enter')
console.log('Показать список комманд - help()')
console.log('Очистить консоль - clear()')

// help() изначально написан мной, нейросеть сделала это красиво и все!

const help = () => {
    console.log('📘 ===============================');
    console.log('📊  ДНЕВНИК УСПЕВАЕМОСТИ — HELP');
    console.log('📘 ===============================\n');

    console.log('⭐ ОСНОВНЫЕ КОМАНДЫ');
    console.log('  ▸ showAll(marks)');
    console.log('    показать все оценки\n');

    console.log('  ▸ mathAverage(marks)');
    console.log('    средняя оценка\n');

    console.log('  ▸ showMax(marks)');
    console.log('    максимальная оценка\n');

    console.log('  ▸ showMin(marks)');
    console.log('    минимальная оценка\n');

    console.log('  ▸ showUpper(marks)');
    console.log('    сортировка по возрастанию\n');

    console.log('  ▸ showLower(marks)');
    console.log('    сортировка по убыванию\n');

    console.log('🔍 ПОИСК И ФИЛЬТРАЦИЯ');
    console.log('  ▸ findFirstMark(marks, оценка)');
    console.log('    найти первую конкретную оценку\n');

    console.log('  ▸ findMarkIndex(marks, оценка)');
    console.log('    количество определённых оценок\n');

    console.log('  ▸ filterMarks(marks, оценка)');
    console.log('    показать оценки выше заданного значения\n');

    console.log('✅ ПРОВЕРКА УСЛОВИЙ');
    console.log('  ▸ find(marks, оценка)');
    console.log('    есть ли хотя бы одна такая оценка\n');

    console.log('  ▸ findUpper(marks, оценка)');
    console.log('    все ли оценки выше заданного значения\n');

    console.log('🔄 ПРЕОБРАЗОВАНИЯ');
    console.log('  ▸ plusOne(marks)');
    console.log('    увеличить все оценки на 1\n');

    console.log('  ▸ minusOne(marks)');
    console.log('    уменьшить все оценки на 1\n');

    console.log('📈 СТАТИСТИКА');
    console.log('  ▸ mathSum(marks)');
    console.log('    сумма всех оценок\n');

    console.log('🛠 СЛУЖЕБНОЕ');
    console.log('  ▸ help()');
    console.log('    показать это меню\n');

    console.log('  ▸ clear()');
    console.log('    очистить консоль\n');

    console.log('📘 ===============================');
};

// генерация нового массива с оценками

const generateNewMarksArray = (mark => {
    let resultArray = [];
    for (let i = 0; i < 6; i++) {
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
    
    if (upper.length === 0) {
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
    const math = marks.reduce((sum, num) => sum + num, 0);
    return console.log(`Общая сумма всех выших оценок - ${math}`);
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
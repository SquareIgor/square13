'use strict';
// 1) Создать HTML страницу и подключить к ней файл скрипта

// 2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

// ·      Первая будет спрашивать "Ваш бюджет на месяц?"

// ·      Вторая "Введите дату в формате YYYY-MM-DD"

// 3) Создать объект appData, который будет содержать такие данные:

// ·      бюджет (передаем сюда переменную из п.2)
// ·      данные времени - timeData (передаем сюда переменную из п.2)
// ·      объект с обязательными расходами - expenses (смотри пункт 4)
// ·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
// ·      массив данных с доп. доходом - income (оставляем пока пустым)
// ·      свойство savings (выставляем его как false)
// 4) Задать пользователю по 2 раза вопросы:
//     “Введите обязательную статью расходов в этом месяце”
//     “Во сколько обойдется?”
//     Записать ответы в объект expenses в формате: 
//     expenses: {
//     “ответ на первый вопрос” : “ответ на второй вопрос”
//     }
// 5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
// 6) Проверить, чтобы все работало без ошибок в консоли
// 7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием



let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-VV-DD", "");
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof(a)) === 'string' && (typeof(a)) != null 
        && (typeof(b)) != null && a != '' && b != '' 
        && a.length < 50) {
        
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
};


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay <= 500) {
    console.log("минимальный");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
    console.log("средний");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий");
} else {
    console.log("Произошла ошибка");
}

'use strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-VV-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();


console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
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
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optional = prompt("Введите статью необязательных расходов", "");

        if ((typeof(optional)) === 'string' && (typeof(optional)) != null
            && (typeof(optional)) != '') {
                appData.optionalExpenses[i + 1] = optional;
            } 
    }
}

chooseOptExpenses();

function detectDaybudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay + " рублей");
}
detectDaybudget();




function detectLevel() {
    if (appData.moneyPerDay <= 500) {
        console.log("минимальный");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
        console.log("средний");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий");
    } else {
        console.log("Произошла ошибка");
    }
    
}
detectLevel();




function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ''),
            persent = +prompt("Под какой процент?", '');

         appData.monthIncome = save/100/12*persent;
         alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));  
    }
}

checkSavings();
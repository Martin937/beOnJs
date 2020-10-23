// 'use strict';
var money = prompt("Ваш бюджет на месяц?", '20000'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-10-21');

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

var a1 = prompt("Введите обязательную статью расходов в этом месяце", 'молоко'),
    a2 = prompt("Во сколько обойдется?", '3000'),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", 'хлеб'),
    a4 = prompt("Во сколько обойдется?", '3000');

appData.expenses.a1 = a2;

appData.expenses.a3 = a4;


alert(appData.budget / 30);
console.log(appData);
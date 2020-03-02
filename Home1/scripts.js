let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    money_for_month: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: []
};

let all_money1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    all_money2 = prompt("Во сколько обойдется?", " "),
    all_money3 = prompt("Введите обязательную статью расходов в этом месяце", " "),
    all_money4 = prompt("Во сколько обойдется?", " ");

appData.expenses[all_money1] = all_money2;
appData.expenses[all_money3] = all_money4;

alert(appData.money_for_month / 30);
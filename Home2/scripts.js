let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    money_for_month: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: []
};

// for (let i = 0; i < 2; i++) {
//     let all_money1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
//         all_money2 = prompt("Во сколько обойдется?", " ");

//     if (typeof (all_money1) === 'string' && typeof (all_money1) != null && typeof (all_money2) != null && all_money1 != '' && all_money2 != '' && all_money1.length < 50) {
//         console.log('done');
//         appData.expenses[all_money1] = all_money2;
//     }
// };

let i = 0;
while (i < 2) {
    let all_money1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        all_money2 = prompt("Во сколько обойдется?", "");

    if (typeof (all_money1) === 'string' && typeof (all_money1) != null && typeof (all_money2) != null && all_money1 != '' && all_money2 != '' && all_money1.length < 50) {
        console.log('done');
        appData.expenses[all_money1] = all_money2;
        i++;
    }
};

// do {
//     let all_money1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
//         all_money2 = prompt("Во сколько обойдется?", " ");

//     if (typeof (all_money1) === 'string' && typeof (all_money1) != null && typeof (all_money2) != null && all_money1 != '' && all_money2 != '' && all_money1.length < 50) {
//         console.log('done');
//         appData.expenses[all_money1] = all_money2;
//     i++;
//     }
// } while (i < 2);

appData.money_per_day = appData.money_for_month / 30;
alert("Ежедневный бюджет:  " + appData.money_per_day);

if (appData.money_per_day < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.money_per_day > 100 && appData.money_per_day < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.money_per_day > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}
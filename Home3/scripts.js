let money, time, money_per_day;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    money_for_month: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let all_money1 = prompt("Введите обязательную статью расходов в этом месяце", " "),
            all_money2 = prompt("Во сколько обойдется?", " ");

        if (typeof (all_money1) === 'string' && typeof (all_money1) != null && typeof (all_money2) != null && all_money1 != '' && all_money2 != '' && all_money1.length < 50) {
            console.log('done');
            appData.expenses[all_money1] = all_money2;
        }
    };
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let opt_exp = prompt("Введите необязательною статью расходов");

        if (typeof (opt_exp) === 'string' && typeof (opt_exp) != null && opt_exp != '') {
            appData.optionalExpenses[i+1] = opt_exp;
        }

    }
}

chooseOptExpenses();


function day_money() {
    appData.money_per_day = (appData.money_for_month / 30).toFixed(3);
    alert("Ежедневный бюджет:  " + appData.money_per_day);
}

day_money();

function detect_Level() {
    if (appData.money_per_day < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.money_per_day > 100 && appData.money_per_day < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.money_per_day > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сума накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();
let title = "myFirstRepo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 75;
let rollback = 50;
let fullPrice = 80000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юани");

console.log(screens.toLowerCase().split(", "));

console.log("Процент отката посреднику за работу " + fullPrice * (rollback/100));



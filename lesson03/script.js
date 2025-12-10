'use strict';

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

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = prompt("Нужен ли адаптив на сайте?");
adaptive = adaptive === "Да" ? true : false;

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - (fullPrice * (rollback/100));
console.log(Math.ceil(servicePercentPrice));

switch (true) {
    case fullPrice > 30000:
        console.log("Даем скидку в 10%");
        break;
    case 15000 < fullPrice && fullPrice <= 30000:
        console.log("Даем скидку в 5%");
        break;
    case 0 < fullPrice && fullPrice <= 15000:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice <= 0:
        console.log("Что то пошло не так");
        break;
}
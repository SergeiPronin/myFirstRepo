'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;

let allServicePrices, fullPrice, servicePercentPrice;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
} 

const getAllServicePrices = function(price1, price2) {
    return price1 + price2;
}

function getFullPrice(price, servicePrice) {
    return price + servicePrice;
}

function getTitle(text) {
    return text.trim().toLowerCase().replace(/^[a-za-я]/i, c => c.toUpperCase());
}

const getServicePercentPrices = function(fullPrice, rollback) {
    return fullPrice - (fullPrice * (rollback/100))
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);

showTypeOf(getTitle(title));
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens)

console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));


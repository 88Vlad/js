'use strict';
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуг нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуг нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 20;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

function getServicePercentPrice() {
    return fullPrice * (1 - rollback / 100);
}

function getTitle(title) {
    title = title.trim().toLowerCase();
    return title.charAt(0).toUpperCase() + title.slice(1);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что-то пошло не так";
    }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(`Типы экранов для разработки: ${screens}`);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость за вычетом процента отката: ${servicePercentPrice}`);
console.log(`Стоимость верстки экранов: ${screenPrice} рубли, и стоимость разработки сайта: ${fullPrice} рубли`);
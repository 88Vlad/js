'use strict';

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?", "12000"));
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseFloat(prompt(`Сколько стоит ${service1}?`));
const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
const servicePrice2 = parseFloat(prompt(`Сколько стоит ${service2}?`));

// Calculating total price and discount
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollbackPercentage = 10;
const maxDiscountThreshold = 30000;
const minDiscountThreshold = 15000;
let discountMessage;

// Applying discount based on total price
switch (true) {
    case fullPrice >= maxDiscountThreshold:
        discountMessage = "Даем скидку в 10%";
        break;
    case fullPrice >= minDiscountThreshold:
        discountMessage = "Даем скидку в 5%";
        break;
    default:
        discountMessage = "Скидка не предусмотрена";
        break;
}

// Calculating final price with rollback
const servicePercentPrice = fullPrice - (fullPrice * (rollbackPercentage / 100));

// Outputting results
console.log(title);
console.log(screens);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(discountMessage);
console.log("Итоговая стоимость работы:", fullPrice, "руб.");
console.log("Итоговая стоимость работы с учетом отката посреднику:", servicePercentPrice.toFixed(2), "руб.");
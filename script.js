'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices = 0;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

const getValidNumber = function (question) {
    let userInput;
    let isValid = false;

    do {
        userInput = prompt(question);

        if (userInput === null) {
            return null; // Если пользователь нажал "Отмена", возвращаем null
        }

        const trimmedInput = userInput.trim();

        if (isNumber(trimmedInput)) {
            isValid = true;
            return parseFloat(trimmedInput); // Возвращаем число после удаления пробелов
        } else {
            alert("Пожалуйста, введите число.");
        }
    } while (!isValid);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные, интерактивные");

    screenPrice = getValidNumber("Сколько будет стоить данная работа?");
    if (screenPrice === null) {
        return; // Если пользователь нажал "Отмена", выходим из функции
    }

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуг нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуг нужен?");
        }

        const servicePrice = getValidNumber("Сколько это будет стоить?");
        if (servicePrice === null) {
            return null; // Если пользователь нажал "Отмена", выходим из функции
        }

        sum += servicePrice;
    }
    return sum;
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
    return fullPrice;
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

asking();
allServicePrices = getAllServicePrices();
if (allServicePrices === null) {
    console.log("Операция отменена пользователем.");
} else {
    fullPrice = getFullPrice();
    servicePercentPrice = getServicePercentPrice();
    title = getTitle();

    console.log("Название проекта:", title);
    console.log("Стоимость верстки экранов:", screenPrice, "рублей");
    console.log("Нужен ли адаптив?", adaptive);
    console.log("Дополнительные услуги:", service1, service2);
    console.log("Стоимость дополнительных услуг:", allServicePrices, "рублей");
    console.log("Полная стоимость разработки сайта:", fullPrice, "рублей");
    console.log("Стоимость со скидкой:", servicePercentPrice, "рублей");
}
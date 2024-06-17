'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: false,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    isNumber: function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    },

    getValidNumber: function (question) {
        let userInput;
        let isValid = false;

        do {
            userInput = prompt(question);

            if (userInput === null) {
                return null; // eсли "Отмена" - null
            }

            const trimmedInput = userInput.trim();

            if (this.isNumber(trimmedInput)) {
                isValid = true;
                return parseFloat(trimmedInput); // число после удаления пробелов
            } else {
                alert("Пожалуйста, введите число.");
            }
        } while (!isValid);
    },

    asking: function () {
        this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        this.screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные, интерактивные");

        this.screenPrice = this.getValidNumber("Сколько будет стоить данная работа?");
        if (this.screenPrice === null) {
            return; // Если "Отмена" - выходим из функции
        }

        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуг нужен?");
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуг нужен?");
            }

            const servicePrice = this.getValidNumber("Сколько это будет стоить?");
            if (servicePrice === null) {
                return null; // Если  "Отмена" - выходим из функции
            }

            sum += servicePrice;
        }
        return sum;
    },

    getFullPrice: function () {
        return this.screenPrice + this.allServicePrices;
    },

    getServicePercentPrice: function () {
        return this.fullPrice;
    },

    getTitle: function () {
        return this.title.trim()[0].toUpperCase() + this.title.trim().substr(1).toLowerCase();
    },

    start: function () {
        this.asking();
        this.allServicePrices = this.getAllServicePrices();
        if (this.allServicePrices === null) {
            console.log("Операция отменена пользователем.");
        } else {
            this.fullPrice = this.getFullPrice();
            this.servicePercentPrice = this.getServicePercentPrice();
            this.title = this.getTitle();
            this.logger();
        }
    },

    logger: function () {
        console.log("Название проекта:", this.title);
        console.log("Стоимость верстки экранов:", this.screenPrice, "рублей");
        console.log("Нужен ли адаптив?", this.adaptive);
        console.log("Дополнительные услуги:", this.service1, this.service2);
        console.log("Стоимость дополнительных услуг:", this.allServicePrices, "рублей");
        console.log("Полная стоимость разработки сайта:", this.fullPrice, "рублей");
        console.log("Стоимость со скидкой:", this.servicePercentPrice, "рублей");

        console.log("Свойства и методы объекта appData:");
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
};
appData.start();
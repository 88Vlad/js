'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        this.asking();
        this.addPrices();
        this.getAllServicePrices();
        this.getFullPrice();
        this.getServicePercentPrice();
        this.getTitle();
        this.logger();
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getValidInput: function (question, isNumber) {
        let userInput;
        let isValid = false;

        do {
            userInput = prompt(question);

            if (userInput === null) {
                return null; // если "Отмена" - null
            }

            const trimmedInput = userInput.trim();

            if (isNumber && this.isNumber(trimmedInput)) {
                isValid = true;
                return parseFloat(trimmedInput); // число после удаления пробелов
            } else if (!isNumber && !isNaN(trimmedInput)) {
                isValid = true;
                return trimmedInput; // строка после удаления пробелов
            } else {
                alert("Пожалуйста, введите корректные данные.");
            }
        } while (!isValid);
    },

    asking: function () {
        appData.title = this.getValidInput("Как называется ваш проект?", false);

        for (let i = 0; i < 2; i++) {
            const name = this.getValidInput("Какие типы экранов нужно разработать?", false);
            const price = this.getValidInput("Сколько будет стоить данная работа?", true);
            appData.screens.push({
                id: i,
                name,
                price
            });
        }

        const services = {};
        for (let i = 0; i < 2; i++) {
            const name = this.getValidInput("Какой дополнительный тип услуги нужен?", false);
            const price = this.getValidInput("Сколько это будет стоить?", true);
            if (services[name]) {
                services[`${name}_${Object.keys(services).length}`] = price;
            } else {
                services[name] = price;
            }
        }
        appData.services = services;

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce((sum, item) => sum + item.price, 0);
    },

    getAllServicePrices: function () {
        appData.allServicePrices = Object.values(appData.services).reduce((sum, price) => sum + price, 0);
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что-то пошло не так";
        }
    },

    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);
    }
};

appData.start();
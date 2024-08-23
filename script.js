'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0, // Значение отката задаем динамически через input[type=range]
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    // Инициализация приложения
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);

        // Обработчик для input[type=range]
        inputRange.addEventListener('input', function () {
            inputRangeValue.textContent = inputRange.value + '%';
            appData.rollback = +inputRange.value;
        });
    },

    // Добавляем заголовок на страницу
    addTitle: function () {
        document.title = title.textContent;
    },

    // Запуск расчетов
    start: function () {
        appData.screens = []; // Обнуляем список экранов перед расчетом
        appData.addScreens();
        if (appData.screens.length === 0) {
            return; // Если нет данных по экранам, прерываем выполнение
        }
        appData.addServices();
        appData.addPrices();
        appData.showResult();
    },

    // Вывод результатов на страницу
    showResult: function () {
        total.value = appData.screenPrice;
        totalCount.value = appData.screens.reduce((sum, screen) => sum + screen.count, 0);
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },

    // Добавление экранов в список
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            if (select.value !== '' && input.value.trim() !== '') {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value
                });
            }
        });
    },

    // Добавление дополнительных услуг
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    // Добавление блока экранов
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    // Расчет цен
    addPrices: function () {
        appData.screenPrice = 0;
        appData.servicePricesNumber = 0;
        appData.servicePricesPercent = 0;

        // Суммируем стоимость экранов
        appData.screens.forEach(screen => {
            appData.screenPrice += screen.price;
        });

        // Суммируем стоимость услуг с фиксированной ценой
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        // Суммируем стоимость услуг в процентах от стоимости экранов
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        // Полная стоимость
        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        // Стоимость с учетом отката посреднику
        appData.servicePercentPrice = appData.fullPrice * (1 - appData.rollback / 100);
    }
};

appData.init();
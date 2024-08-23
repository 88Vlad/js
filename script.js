'use strict';

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
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        // appData.getServicePercentPrice();
        // appData.logger();
        appData.shwoResult()
    },
    shwoResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPrecent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            for (let i = 0; i < select.length; i++) {
                const selectElement = select[i];
                const inputElement = input[i];

                if (selectElement.value === '' || inputElement.value.trim() === '') {
                    appData.isError = true;
                } else {
                    appData.screens.push({
                        id: index,
                        name: selectName,
                        price: +select.value * +input.value
                    })
                }
            }

        })
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const lable = item.querySelector('lable')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicePrecent[lable.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const lable = item.querySelector('lable')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[lable.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        for (let key in appData.servicePercentPrice) {
            appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.init()
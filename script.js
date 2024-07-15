'use strict';

// 1. Калькулятор верстки
const title = document.getElementsByTagName('h1')[0];
console.log(title);

// 2. Кнопки Рассчитать, Сброс 
const butCalculateStart = document.getElementsByClassName("handler_btn")[0];
const butCalculateReset = document.getElementsByClassName("handler_btn")[1];
console.log(butCalculateStart);
console.log(butCalculateReset);

// 3. Кнопка "+" 
const butPlus = document.querySelector(".screen-btn");
console.log(butPlus);

// 4. Все элементы other-items и percent
const otherItems1 = document.querySelectorAll(".other-items.percent");
const otherItems2 = document.querySelectorAll(".other-items.number");
console.log(otherItems1);
console.log(otherItems2);

// 5. input
const inputRange = document.querySelector(".rollback input[type='range']");
console.log(inputRange);
 
const spanRange = document.querySelector(".rollback .range-value");
console.log(spanRange);

// 6. Все инпуты с классом total-input 
const totalInputCost = document.getElementsByClassName("total-input")[0];
const totalInputScreens = document.getElementsByClassName("total-input")[1];
const totalInputOtherServices = document.getElementsByClassName("total-input")[2];
const totalInputFullCost = document.getElementsByClassName("total-input")[3];
const totalInputRollback = document.getElementsByClassName("total-input")[4];
console.log(totalInputCost);
console.log(totalInputScreens);
console.log(totalInputOtherServices);
console.log(totalInputFullCost);
console.log(totalInputRollback);

// 7. Все блоки с классом screen в изменяемую переменную
let listScreen = document.querySelectorAll(".screen");
console.log(listScreen);

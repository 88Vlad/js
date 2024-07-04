'use strict';

// 1. Заголовок "Калькулятор верстки"
const title = document.getElementsByTagName('h1')[0];
console.log(title);
// 2. Кнопки "Рассчитать" и "Сброс" 
const butCalculate = document.getElementsByClassName("handler_btn");
console.log(butCalculate);
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
// 6. span 
const spanRange = document.querySelector(".rollback .range-value");
console.log(spanRange);
// 7. Все инпуты с классом total-input 
const totalInputs = document.getElementsByClassName("total-input");
console.log(totalInputs);
// 8. Все блоки с классом screen в изменяемую переменную
let listScreen = document.querySelectorAll(".screen");
console.log(listScreen);

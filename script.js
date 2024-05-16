var num = 266219;
var product = 1;
var numString = num.toString();
for (var i = 0; i < numString.length; i++) {
    product *= parseInt(numString[i]);
}

console.log("Произведение цифр:", product);
var result = product * product * product;
console.log("Результат возведения в степень 3:", result);
var resultString = result.toString();
var firstTwoDigits = parseInt(resultString.substring(0, 2));
console.log("Первые две цифры полученного числа:", firstTwoDigits);
// генерация случайного числа
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// замыкание с загаданным числом
function createGame() {
    const secretNumber = getRandomNumber(1, 100); // Генерируем случайное число от 1 до 100

    // Функция игры
    function playGame() {
        const userNumber = prompt("Угадай число от 1 до 100");

        // Проверка на отмену
        if (userNumber === null) {
            alert("Игра окончена");
            return;
        }

        // Проверка на ввод 
        const parsedNumber = parseInt(userNumber, 10);
        if (isNaN(parsedNumber)) {
            alert("Введи число!");
            playGame(); // Рекурсивный вызов  playGame
            return;
        }

        // Проверка на совпадение с загаданным числом
        if (parsedNumber === secretNumber) {
            alert("Поздравляю, Вы угадали!!!");
            return;
        }

        // Подсказки
        if (parsedNumber < secretNumber) {
            alert("Загаданное число больше");
        } else {
            alert("Загаданное число меньше");
        }

        playGame(); // Рекурсивный вызов playGame
    }

    return playGame;
}
// Запуск 
const game = createGame();
game();
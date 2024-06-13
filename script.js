// Функция для генерации случайного числа в диапазоне от min до max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для создания замыкания с загаданным числом
function createGame() {
    const secretNumber = getRandomNumber(1, 100); // Генерируем случайное число от 1 до 100

    // Функция для игры
    function playGame() {
        const userNumber = prompt("Угадай число от 1 до 100");

        // Проверка на отмену игры
        if (userNumber === null) {
            alert("Игра окончена");
            return;
        }

        // Проверка на ввод числа
        const parsedNumber = parseInt(userNumber, 10);
        if (isNaN(parsedNumber)) {
            alert("Введи число!");
            playGame(); // Рекурсивный вызов функции playGame
            return;
        }

        // Проверка на совпадение с загаданным числом
        if (parsedNumber === secretNumber) {
            alert("Поздравляю, Вы угадали!!!");
            return;
        }

        // Подсказки для пользователя
        if (parsedNumber < secretNumber) {
            alert("Загаданное число больше");
        } else {
            alert("Загаданное число меньше");
        }

        playGame(); // Рекурсивный вызов функции playGame
    }

    return playGame; // Возвращаем функцию playGame с замыканием
}

// Запуск игры
const game = createGame();
game();
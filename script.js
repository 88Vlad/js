'use strict';
// Получаем все книги и конвертируем NodeList в массив
const booksContainer = document.querySelector('.books');
const bookElements = Array.from(document.querySelectorAll('.book'));
// Функция для сортировки книг по их названиям
const sortBooks = () => {
    bookElements.sort((a, b) => {
        const titleA = a.querySelector('h2 a').innerText;
        const titleB = b.querySelector('h2 a').innerText;
        return titleA.localeCompare(titleB); // Сравнение строк
    });
    // Перемещаем книги в контейнер в отсортированном порядке
    bookElements.forEach(book => booksContainer.appendChild(book));
};

sortBooks();

// Обновляем фон 
document.querySelector('body').style.backgroundImage = 'url(./image/anotherbackground.jpg)';
// Обновляем название одной из книг
booksContainer.children[2].querySelector('h2 a').textContent = 'Книга 3. this и Прототипы Объектов';
// Удаляем рекламный блок
document.querySelector('.adv').remove();
// Функция для сортировки глав в книге
const sortChapter = (collection) => {
    // Функция для сортировки элементов списка
    const sortElements = (arr) => {
        return Array.from(arr).sort((a, b) => {
            return a.textContent.localeCompare(b.textContent); // Сравнение строк
        });
    };

    // Получаем все элементы списка
    const elements = collection.querySelectorAll('li');
    const chapters = [];
    const appendices = [];

    // Распределяем элементы по категориям
    elements.forEach(el => {
        if (el.textContent.includes('Введение')) {
            collection.insertBefore(el, elements[0]); // Вставляем перед первым элементом
        } else if (el.textContent.includes('Предисловие')) {
            collection.insertBefore(el, elements[1]); // Вставляем перед вторым элементом
        } else if (el.textContent.includes('Глава')) {
            chapters.push(el); // Добавляем в массив глав
        } else if (el.textContent.includes('Приложение')) {
            appendices.push(el); // Добавляем в массив приложений
        }
    });
    // Сортируем и добавляем главы в конец списка
    sortElements(chapters).forEach(el => {
        collection.appendChild(el);
    });
    // Сортируем и добавляем приложения в конец списка
    sortElements(appendices).forEach(el => {
        collection.appendChild(el);
    });
};
// Сортируем главы и приложения для двух книг
sortChapter(booksContainer.children[1].querySelector('ul'));
sortChapter(booksContainer.children[4].querySelector('ul'));
// Добавляем новую главу в последнюю книгу
let newChapter = document.createElement('li');
newChapter.innerText = 'Глава 8: За пределами ES6';
booksContainer.children[5].querySelector('ul').appendChild(newChapter);
// Сортируем главы и приложения для книги с новой главой
sortChapter(booksContainer.children[5].querySelector('ul'));
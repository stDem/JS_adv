// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const loadAllBtn = document.querySelector("#loadAll-btn");
const clearBtn = document.querySelector("#clear-btn");
const clearAllBtn = document.querySelector("#clearAll-btn");
const input = document.querySelector("#input-text");
const inputComm = document.querySelector("#input-comment");
const text = document.querySelector("#saved-text");

saveBtn.addEventListener("click", () => {
  input.value !== "" && inputComm.value !== ""
    ? localStorage.setItem(input.value, inputComm.value)
    : (text.textContent = "Вы ввели не все значения");
});
loadBtn.addEventListener("click", () => {
  text.textContent = localStorage.getItem(input.value)
    ? localStorage.getItem(input.value)
    : "Такого товара нет";
});
loadAllBtn.addEventListener("click", () => {
  text.textContent = Object.entries(localStorage);
});

clearBtn.addEventListener("click", () => {
  if (input.value !== "") {
    if (localStorage.getItem(input.value)) {
      localStorage.removeItem(input.value);
      text.textContent = "Отзыв удален!";
    } else text.textContent = "Такого товара нет";
  } else text.textContent = "Вы не ввели название товара";
});
clearAllBtn.addEventListener("click", () => {
  localStorage.clear();
});

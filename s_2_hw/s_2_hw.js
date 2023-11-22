// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.
class Book {
  #book = [];
  get allBooks() {
    // for (var i = 0; i < this.#book.length; i++) {
    //   return this.#book[i];
    // }
    return this.#book;
  }
  addBook(title) {
    for (var i = 0; i < this.#book.length; i++) {
      if (this.#book[i] === title) {
        throw new Error("Такая книга уже есть");
      } else this.#book.push(title);
    }
  }
  removeBook(title) {
    for (var k = 0; k < this.#book.length; k++) {
      if (this.#book[k] === title) {
        this.#book.splice(k, 1);
      } else throw new Error("Такой книги нет");
    }
  }

  hasBook(title) {
    boolBook = false;
    for (var j = 0; j < this.#book.length; j++) {
      if (this.#book[j] === title) {
        boolBook = true;
      }
      return boolBook;
    }
  }
}

const books = new Book("physics of the impossible");
books.addBook("Homo Roboticus?");
console.log(books.book);

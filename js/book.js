
const title = document.getElementById("title")
const author = document.getElementById("author")
const year = document.getElementById("year")

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getTitle() {
        return this.title
    }

    getAuthor() {
        return this.author
    }

    getYear() {
        return this.year
    }

    setTitle(newTitle) {
        this.title = newTitle
    }

    setAuthor(newAuthor) {
        this.author = newAuthor
    }
    setYear(newYear) {
        this.year = newYear;
    }
}

const myBook = new Book('Task: Wb', 'Alexander Konovalov', 2023);

title.innerHTML += `<span class="color__wb">${myBook.getTitle()}</span> `
author.innerHTML += `<span class="color__green">${myBook.getAuthor()}</span>`
year.innerHTML += `<span class="color__wb">${myBook.getYear()}</span>`

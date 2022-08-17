const books = require("./bookList")

let minIndex = 0;
for(let i = 0; i < books.length; i++) {
    if(books[i].price < books[minIndex].price) {
        minIndex = i;
    }
}

const book = books[minIndex]

console.log(`O livro mais barato é ${book.title} ${book.price}`)

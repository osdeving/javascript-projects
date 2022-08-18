const books = require('./bookList')

function minValue(books, actualPos) {
    let mostCheap = 0

    for(let current = 0; current < books.length; current++) {
        if(books[current].price < books[mostCheap].price) {
            mostCheap = current
        }
    }
    
    return mostCheap
}

let mostCheap = 0

for(let current = 0; current < books.length; current++) {
    if(books[current].price < books[mostCheap].price) {
        mostCheap = current
    }
}

console.log(`The most cheap book is ${books[mostCheap].price}`)

module.exports  = minValue
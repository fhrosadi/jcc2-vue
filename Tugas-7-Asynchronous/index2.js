var readBooksPromise = require('./promise.js')

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    },
    {
        name: 'komik',
        timeSpent: 1000
    }
]


var time = 10000
books.forEach(book => {
    readBooksPromise(time, book)
    time = time - book.timeSpent
})

// // Satu per satu

// var time1 = 10000
// readBooksPromise(time1, books[0])
// time1 = time1 - books[0].timeSpent

// readBooksPromise(time1, books[1])
// time1 = time1 - books[1].timeSpent

// readBooksPromise(time1, books[2])
// time1 = time1 - books[2].timeSpent

// readBooksPromise(time1, books[3])
// time1 = time1 - books[3].timeSpent
var readBooks = require('./callback.js')

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

function callback(time) {
    console.log(time)
}

books.forEach(book => {
    readBooks(time, book, callback)
    time = time - book.timeSpent
})
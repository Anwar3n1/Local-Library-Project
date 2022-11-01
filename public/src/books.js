function findAuthorById(authors, id) {
  const matchingId = authors.find((author) => author.id === id)
  return matchingId
}
function findBookById(books, id) {
  const results = books.find((books) => books.id === id)
  return results 
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) => book.borrows[0].returned=== false)
  const checkedOutBooks = books.filter((book) => book.borrows[0].returned === true)

  return [returnedBooks, checkedOutBooks]
}


function getBorrowersForBook(book, accounts) {
let borrowersArray = book.borrows.map((book) =>{ 
let accountId = findAuthorById(accounts, book.id)
accountId.returned = book.returned
  return accountId
}).slice(0,10);

  
  return borrowersArray
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

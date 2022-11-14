function findAccountById(accounts, id) {  
  const result = accounts.find((accounts) => accounts.id === id);
  return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => accountsA.name.last > accountsB.name.last ? 1: -1)
  return accounts

}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idNumber = book.borrows.filter(borrow =>
     borrow.id === account.id).length
     return total + idNumber
    
  }, 0)
  }
  
function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksPossessedByAccount = checkedOut.map((book) => {
  const author = authors.find((author) => author.id === book.authorId)
  return {...book, author };
});
return booksPossessedByAccount;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

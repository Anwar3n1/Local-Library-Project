function findAccountById(accounts, id) {  
  const result = accounts.find((accounts) => accounts.id === id);
  return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA, accountsB) => accountsA.name.last > accountsB.name.last ? 1: -1)
  return accounts

}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;

  books.forEach(book=>{
    const borrows = book.borrows;
    borrows.forEach(borrow=>{
      if(borrow.returned === true)
        {
          count++;
        }
    })
  })
  return count/13;
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

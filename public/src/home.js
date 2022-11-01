function getTotalBooksCount(books) {
  let total = 0
  books.forEach((books) => {
  total += 1})
  return total
 
}

function getTotalAccountsCount(accounts) {
  let total = 0
  accounts.forEach((accounts) => {
    total += 1;
  
  })
  return total
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false);
  return result.length
}


function getMostCommonGenres(books) {
    let result = {};
    let genre = books.forEach((book) => {
      if (result[book.genre] == null) {
        result[book.genre] = 1; 
      } else {
        result[book.genre] += 1;
      }
    })
    let countArray = [];
    for (const [key, value] of Object.entries(result)) {
      countArray.push({
        'name' : key,
        'count' : value
      }); 
    }
    countArray.sort((a,b) => b.count - a.count);
    return countArray.slice(0, 5);
  }  


function getMostPopularBooks(books) {
    return books.map(book => {
      return {
        name:book.title,
        count: book.borrows.length
      }
      }).sort((bookA,bookB) => bookB.count - bookA.count).slice(0,5)

}

function getMostPopularAuthors(books, authors) {
 let authorsArray = [];
  authors.forEach((author) => {
  const byAuthor = books.filter((book) => book.authorId === author.id);
  let borrowers = 0
  byAuthor.forEach((book) => (borrowers += book.borrows.length));
  authorsArray.push({
    name: author.name.first + " " + author.name.last,
    count: borrowers,
  });
  });
    authorsArray.sort((a, b) => (a.count < b.count ? 1 : -1));
    authorsArray.length =5;
    return authorsArray
  }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

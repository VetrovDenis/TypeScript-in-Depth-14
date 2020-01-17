showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, Angular, TypeScript, HTML }

function getAllBooks(): any[] {
  const books: Array<any> = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
  ];
  return books;
}

function logFirstAvailable(booksArray: any[]): void {
  const numOfBooks: number = booksArray.length;
  let firstBookName: string;
  for (const book of booksArray) {
    if (book.available) firstBookName = book.title;
    break;
  }
  console.log(numOfBooks, firstBookName)
}

function getBookTitlesByCategory(category: Category): string[] {
  const books: any[] = getAllBooks();
  const titles: string[] = [];
  for (const book of books) {
    if (book.category === category) titles.push(book.title);
  }
  return titles;
}

function logBookTitles(titles: string[]): void {
  console.log('logBookTitles')
  for (const title of titles) {
    console.log(title)
  }
}

function getBookAuthorByIndex(i: number): [string, string] {
  const books: any[] = getAllBooks();
  const { title, author } = books[i];
  return [title, author]
}

function calcTotalPages(): bigint {
  const cityLib = [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
  const result = cityLib.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, 0n)
  return result;
}
//Task 02.01
logFirstAvailable(getAllBooks())
logBookTitles(getBookTitlesByCategory(Category.JavaScript))
console.log(getBookAuthorByIndex(1))
console.log(calcTotalPages())
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, Angular, TypeScript, HTML }

function getAllBooks(): readonly any[] {
  const books = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
  ];
  return books;
}

function logFirstAvailable(booksArray: readonly any[] = getAllBooks()): void {
  const numOfBooks: number = booksArray.length;
  let firstBookName: string;
  for (const book of booksArray) {
    if (book.available) firstBookName = book.title;
    break;
  }
  console.log(numOfBooks, firstBookName)
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
  const books = getAllBooks();
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
  const books = getAllBooks();
  const { title, author } = books[i];
  return [title, author]
}

function calcTotalPages(): bigint {
  const cityLib = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
  const result = cityLib.reduce((acc: bigint, obj: any) => {
    return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
  }, 0n)
  return result;
}

function getBookByID(i: number): any {
  const books = getAllBooks();
  return books.find(book => book.id === i)
}

function createCustomerID(name: string, id: number): string {
  return `${name}: ${id}`
}

function createCustomer(name: string, age?: number, city?: string) {
  console.log(`Customer: ${name}, ${age || ''},  ${city || ''}`)
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(`Customer: ${customer}`)
  let titles: string[] = [];
  for (const id of bookIDs) {
    const book = getBookByID(id);
    if (book && book.available) titles.push(book.title);
  }
  return titles
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
  const books = getAllBooks();
  if (args.length === 0) {
    return [];
  }
  else if (args.length === 1) {
    const arg = args[0];
    if (typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title)
    }
    else {
      return books.filter(book => book.available === arg).map(book => book.title)
    }
  }
  else if (args.length === 2) {
    const id = args[0];
    const available = args[1];
    if (typeof id === 'number' && typeof available === 'boolean') {
      return books.filter(book => book.id === id && book.available === available).map(book => book.title)
    }
  }
}

function assertStringValue(param: any): asserts param is string {
  if (typeof param !== 'string') {
    throw new Error('value should have been a string')
  }
}

function bookTitleTransform(name: any){
  assertStringValue(name)
  return [...name].reverse().join('');
}

//Task 02.01
// logFirstAvailable(getAllBooks())
// logBookTitles(getBookTitlesByCategory(Category.JavaScript))
// console.log(getBookAuthorByIndex(1))
// console.log(calcTotalPages())

//Task 03.01
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title))
// console.log(getBookByID(1))

//Task 03.02
// const concatId = createCustomerID('name', 10);
// console.log(concatId)
// let idGen: (name: string, id: number) => string;
// idGen = (name: string, id: number) => `${name}: ${id}`;
// idGen = createCustomerID;
// const concatId2 = idGen('name2', 20);
// console.log(concatId2)

//Task 03.03
// createCustomer('Ann', 20, 'Kiev')
// createCustomer('Denis')
// const titles = getBookTitlesByCategory();
// titles.forEach(title => console.log(title))
// logFirstAvailable();
// const myBooks = сheckoutBooks('Ann', 1, 2, 3, 4)
// console.log(myBooks)

//Task 03.04
// const checkBooks = getTitles(false)
// console.log(checkBooks)

//Task 03.05
// console.log(bookTitleTransform('Denis'))
// console.log(bookTitleTransform(234234))

//Task 04.01
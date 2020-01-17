showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, Angular, TypeScript, HTML }

interface DamageLogger { (reason: string): void }

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: DamageLogger
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void
}

type BookProperties = keyof Book;

function getAllBooks(): readonly Book[] {
  const books: readonly Book[] = <const>[
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

// function calcTotalPages(): bigint {
//   const cityLib = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
//   const result = cityLib.reduce((acc: bigint, obj: any) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//   }, 0n)
//   return result;
// }

function getBookByID(i: number): Book | undefined {
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

function bookTitleTransform(name: any) {
  assertStringValue(name)
  return [...name].reverse().join('');
}

function printBook(book: Book): void {
  console.log(book.title, book.author)
}

function getBookProp(book: Book, bookProperty: BookProperties): any {
  if (typeof book[bookProperty] === 'function') {
    return (book[bookProperty] as Function).name;
  }
  else {
    return book[bookProperty];
  }
}

class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log(`Creating a new ReferenceItem`);
  //   this.title = newTitle;
  //   this.year = newYear;
  // }
  private _publisher: string;
  static department: string = 'Research';

  get publisher(): string {
    return this._publisher.toUpperCase()
  }

  set publisher(newValue: string) {
    this._publisher = newValue;
  }

  constructor(public title: string, protected year: number) {
    //   console.log(`Creating a new ReferenceItem`);
  }
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`)
    console.log(`Department ${ReferenceItem.department}`)
  }
}

class Encyclopedia extends ReferenceItem {
  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }
  printItem() {
    super.printItem();
    console.log(`Edition: ${this.year}`)
  }
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
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason) => console.log(`Damaged: ${reason}`)
// }
// printBook(myBook)
// myBook.markDamaged('missing back cover')

//Task 04.02
// const f = (damage: string) => console.log(`damage ${damage}`)
// const logDamage: DamageLogger = f;
// logDamage('damaged book')

//Task 04.03
// const favoriteAuthor: Author = {
//   name: 'Erik',
//   email: 'email',
//   numBooksPublished: 3
// }

// const favoriteLibrarian: Librarian = {
//   name: 'Denis',
//   email: 'email2',
//   department: 'Classics',
//   assistCustomer(custName: string) {
//     console.log('assistCustomer', custName)
//   }
// }

//Task 04.04
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// }
// console.log(offer?.magazine)

//Task 04.05
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: (reason) => console.log(`Damaged: ${reason}`)
// }
// console.log(getBookProp(myBook, 'title'))
// console.log(getBookProp(myBook, 'markDamaged'))

//Task 05.01
// const ref: ReferenceItem = new ReferenceItem('New title', 2020);
// ref.printItem()
// ref.publisher = 'new Publisher'
// console.log(ref.publisher)

//Task 05.02
const refBook: Encyclopedia = new Encyclopedia('Biggest Enc', 2020, 1)
refBook.printItem();
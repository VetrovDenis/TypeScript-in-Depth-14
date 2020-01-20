import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces'
import { PersonBook, BookRequiredFields, UpdatedBook, createCustomerFunctionType } from './types'
import { getAllBooks, purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from './functions'

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
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
// const logDamage: Logger = f;
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
// const refBook: Encyclopedia = new RefBook('Biggest Enc', 2020, 1)
// refBook.printItem();

//Task 05.03
// const refBook: Encyclopedia = new RefBook('Biggest Enc', 2020, 1)
// refBook.printCitation();

//Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Borys');

//Task 05.05
// const personBook: PersonBook = {
//   name: 'Anna',
//   email: 'annaemail',
//   title: 'Introductin',
//   author: 'unknown',
//   available: true,
//   id: 21,
//   category: Category.JavaScript,
// };
// console.log(personBook)

//Task 06.03
// const refBook: Encyclopedia = new RefBook('Biggest Enc', 2020, 1)
// refBook.printCitation();

//Task 06.05
// import('./classes').then(module => {
//   const reader = new module.Reader();
//   reader.name = 'Ann';
//   reader.take(getAllBooks()[1])
//   console.log(reader)
// })

//Task 07.01
// const inventory: Book[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const purgedInventrory = purge(inventory);
// console.log(purgedInventrory)

// const inventory2: number[] = [1, 2, 3, 4, 5, 6];
// const purgedInventrory2 = purge(inventory2);
// console.log(purgedInventrory2)

//Task 07.02
// const inventory: Book[] = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const newShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => {
//   newShelf.add(book)
// })
// const first = newShelf.getFirst()
// console.log(first);

// const magazines = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(book => {
//   magazinesShelf.add(book)
// })
// const firstMagazine = magazinesShelf.getFirst()
// console.log(firstMagazine);


//Task 07.03
// const magazines = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(book => {
//   magazinesShelf.add(book)
// })
// magazinesShelf.printTitles()
// console.log(magazinesShelf.find('Five Points'));

//Task 07.04
// const book: BookRequiredFields = { pages: 100, markDamaged: null, id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software };
// const updatedBook: UpdatedBook = { id: 10 }
// const params: Parameters<createCustomerFunctionType> = ['Anna']
// createCustomer(...params);

//Task 08.01
//const obj = new UniversityLibrarian();

//Task 08.02
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// (fLibrarian as any).printLibrarian();
// fLibrarian['printLibrarian']();

//Task 08.03
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assitFaculty = null;
// fLibrarian.teachCommunity = null;

//Task 08.04
// const refBook: RefBook = new RefBook('Biggest Enc', 2020, 1)
// refBook.printItem();

//Task 08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris')

//Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name)

//Task 08.07
// const refBook: RefBook = new RefBook('Biggest Enc', 2020, 1)
// refBook.copies = -10;
// console.log(refBook)

//Task 09.01
// console.log('Begin')
// getBooksByCategory(Category.JavaScript, logCategorySearch)
// console.log('End')

//Task 09.02
// console.log('Begin')
// getBooksByCategoryPromise(Category.JavaScript).
//   then(titles => {
//     console.log(titles)
//     return titles.length;
//   })
//   .then(length => console.log(length))
//   .catch(reason => console.log(reason));
// console.log('End')

//Task 09.03
// console.log('Begin')
// logSearchResults(Category.Software)
//   .catch(reason => console.log(reason));
// console.log('End')

import { ReferenceItem, UniversityLibrarian, RefBook } from "./classes";
import { Category } from './enums';
import { Book, Logger, Author, Librarian } from './interfaces'
import { PersonBook } from './types'
import { getAllBooks } from './functions'

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

//Task 07.02

//Task 07.03

//Task 07.04

//Task 08.01

//Task 08.02

//Task 08.03

//Task 08.04

//Task 08.05

//Task 08.06

//Task 08.07

//Task 09.01

//Task 09.02

//Task 09.03
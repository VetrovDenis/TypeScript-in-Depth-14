import { Book, LibMgrCallback } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}

export function logFirstAvailable(booksArray: readonly any[] = getAllBooks()): void {
    const numOfBooks: number = booksArray.length;
    let firstBookName: string;
    for (const book of booksArray) {
        if (book.available) firstBookName = book.title;
        break;
    }
    console.log(numOfBooks, firstBookName)
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];
    for (const book of books) {
        if (book.category === category) titles.push(book.title);
    }
    return titles;
}

export function logBookTitles(titles: string[]): void {
    console.log('logBookTitles')
    for (const title of titles) {
        console.log(title)
    }
}

export function getBookAuthorByIndex(i: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[i];
    return [title, author]
}

// export function calcTotalPages(): bigint {
//   const cityLib = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
//   const result = cityLib.reduce((acc: bigint, obj: any) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//   }, 0n)
//   return result;
// }

export function getBookByID(i: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === i)
}

export function createCustomerID(name: string, id: number): string {
    return `${name}: ${id}`
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Customer: ${name}, ${age || ''},  ${city || ''}`)
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`)
    let titles: string[] = [];
    for (const id of bookIDs) {
        const book = getBookByID(id);
        if (book && book.available) titles.push(book.title);
    }
    return titles
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
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

export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string')
    }
}

export function bookTitleTransform(name: any) {
    assertStringValue(name)
    return [...name].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(book.title, book.author)
}

export function getBookProp(book: Book, bookProperty: BookProperties): any {
    if (typeof book[bookProperty] === 'function') {
        return (book[bookProperty] as Function).name;
    }
    else {
        return book[bookProperty];
    }
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2)
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        const titles: string[] = getBookTitlesByCategory(category);
        try {
            if (titles.length > 0)
                callback(null, titles)
            else
                throw new Error('No books')

        } catch (error) {
            callback(error, null)
        }
    }, 2000);
}

export const logCategorySearch: LibMgrCallback = function (err: Error, titles: string[]) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);
            if (titles.length > 0)
                resolve(titles)
            else
                reject('No books')
        }, 2000);
    });
    return p;
}

export async function logSearchResults(category: Category): Promise<any> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles)
} 
import * as Interfaces from '../interfaces'

export abstract class ReferenceItem {
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

    abstract printCitation(): void;
}
import { ReferenceItem } from "../classes";
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;
    
    @positiveInteger
    get copies(): number {
        return this._copies
    }
    set copies(newCopies: number) {
        this._copies = newCopies
    }
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.year}`)
    }
    printCitation(): void {
        console.log(`${this.title} ${this.year}`)
    }
}
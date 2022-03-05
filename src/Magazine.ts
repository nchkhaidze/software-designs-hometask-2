import { Item } from './Item';

export class Magazine extends Item {
    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
    }
}

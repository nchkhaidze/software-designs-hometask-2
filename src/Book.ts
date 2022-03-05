import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    author: string;

    constructor(pages: Pages, title: string, author: string) {
        super(pages, title);
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
    }
}

import { Pages } from './Pages';
import { PagesIterable } from './PagesIterable';

export abstract class Item  {
    protected pages: Pages;
    protected title: string;

    constructor(pages: Pages, title: string) {
        this.pages = pages;
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    abstract toString(): string;
}

Object.assign(Item.prototype, PagesIterable)

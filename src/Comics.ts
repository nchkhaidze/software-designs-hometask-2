import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    author: string;
    artist: string;

    constructor(pages: Pages, title: string, author: string, artist: string) {
        super(pages, title);
        this.author = author;
        this.artist = artist;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    getArtist() {
        return this.artist;
    }

    setArtist(artist: string) {
        this.artist = artist;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
    }
}

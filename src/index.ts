import { Book } from './Book';
import { Pages } from './Pages';
import { Page } from './Page';

const book = new Book(new Pages([
    new Page(1, 'with text', 'simple paper'),
    new Page(2, 'with text', 'simple paper'),
    new Page(3, 'with text', 'simple paper'),
    new Page(4, 'with text', 'simple paper')
]), 'J. K. Rowling', 'Harry Potter');

// @ts-ignore
for (let page of book) {
    console.log(page);
}

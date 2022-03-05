import { Pages } from '../src/pages';
import { Page } from '../src/page';
import { Book } from '../src/book';

describe('Book', () => {
    it('toString should return correct value', () => {
        let counter = 1;
        const book = new Book(new Pages([
            new Page(1, 'with text', 'simple paper'),
            new Page(2, 'with text', 'simple paper'),
            new Page(3, 'with text', 'simple paper'),
            new Page(4, 'with text', 'simple paper'),
        ]), 'Harry Potter', 'J. K. Rowling');

        expect(book.toString()).toEqual('Book: Harry Potter by J. K. Rowling with number of pages: 4');

        // @ts-ignore
        for (const page of book) {
            expect(page.toString()).toBe(`Here is page with text #${counter} and it\'s material is simple paper`);
            counter++;
        }
    });
});

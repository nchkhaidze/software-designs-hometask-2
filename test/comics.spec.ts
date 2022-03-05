import { Pages } from '../src/pages';
import { Page } from '../src/page';
import { Comics } from '../src/comics';

describe('Comics', () => {
    it('toString should return correct value', () => {
        let counter = 1;
        const comics = new Comics(new Pages([
            new Page(1, 'with images', 'glossy paper'),
            new Page(2, 'with images', 'glossy paper'),
        ]), 'Spider-Man', 'some author', 'Stan Lee');

        expect(comics.toString()).toBe('Comics: Spider-Man by some author, the artist is Stan Lee, number of pages: 2');

        // @ts-ignore
        for (const page of comics) {
            expect(page.toString()).toBe(`Here is page with images #${counter} and it\'s material is glossy paper`);
            counter++;
        }
    });
});

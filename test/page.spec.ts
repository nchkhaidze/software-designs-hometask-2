import { Page } from '../src/page';

describe('Page', () => {
    it('toString should return correct value', () => {
        const page = new Page(3, 'with text', 'simple paper');

        expect(page.toString()).toBe('Here is page with text #3 and it\'s material is simple paper');
    });
});

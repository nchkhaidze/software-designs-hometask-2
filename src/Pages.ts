import { Page } from './Page';

export class Pages extends Array {
    constructor(pages: Page[]) {
        super();
        this.push(...pages);
    }
}

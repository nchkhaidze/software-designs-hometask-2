import { PageMaterial, PageType } from './model';

export class Page {
    pageNumber: number;
    pageType: PageType;
    pageMaterial: PageMaterial;

    constructor(pageNumber: number, pageType: PageType, pageMaterial: PageMaterial) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString() {
        return `Here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
    }
}

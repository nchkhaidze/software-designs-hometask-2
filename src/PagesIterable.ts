export const PagesIterable = {
    pages: [],
    [Symbol.iterator]() {
        return {
            pages: this.pages,
            pagesIndex: 0,
            next() {
                if (this.pagesIndex < this.pages.length) {
                    return { done: false, value: this.pages[this.pagesIndex++] };
                } else {
                    return { done: true };
                }
            },
        };
    },
};



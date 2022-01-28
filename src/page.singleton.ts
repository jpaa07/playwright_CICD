import { Page } from '@playwright/test';

export class PageSingleton {
    private static instance: PageSingleton;
    private static page: Page;

    constructor() {
        console.log('new class called');
    }

    public static getInstance(): PageSingleton {
        if (!PageSingleton.instance) {
            PageSingleton.instance = new PageSingleton();
        }
        return PageSingleton.instance;
    }

    public setPage(page: Page): void {
        PageSingleton.page = page;
    }

    public getPage(): Page {
        return PageSingleton.page;
    }
}
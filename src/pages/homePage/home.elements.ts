import { Locator, Page } from '@playwright/test'

export class HomeElements {

    public homeLogo: Locator;
    public headerContainer: Locator;
    public courseLink: Locator;

    constructor(page: Page){
        this.headerContainer = page.locator('.ct-header-container');
        this.homeLogo = this.headerContainer.locator('.ct-logo-header');
        this.courseLink = this.headerContainer.locator('.ct-link:visible >> text=Courses');
    }
}
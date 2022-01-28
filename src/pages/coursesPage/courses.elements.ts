import { Locator, Page } from '@playwright/test';

export class CoursesElements {

    public coursesContainer: Locator

    constructor(page: Page) {
        this.coursesContainer = page.locator('text=Showing all courses');
    }
}
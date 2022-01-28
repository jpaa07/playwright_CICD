import { test, expect } from '@playwright/test'; 
import { PageSingleton } from '../src/page.singleton';
import { CoursesActions } from '../src/pages/coursesPage/courses.actions';
import { HomeActions } from '../src/pages/homePage/home.actions';

let myInstance: PageSingleton;

test.describe('First test suite', async() => {

  test.beforeAll(async ({ browser })=> {
    myInstance = PageSingleton.getInstance();
    myInstance.setPage(await browser.newPage());
  });
  
  test('basic test', async () => {
    // Page actions instances
    const homeActions = new HomeActions();
    const coursesActions = new CoursesActions();

    await myInstance.getPage().goto('/');
    const isLogoVisible = await homeActions.isLogoVisible();
    expect(isLogoVisible).toBeTruthy();

    await homeActions.selectCoursesLink();
    const isCoursesContainerVisible = await coursesActions.isCoursesContainerVisible();
    expect(isCoursesContainerVisible).toBeTruthy();
  });
});


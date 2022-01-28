import { CoursesElements } from './courses.elements';
import { PageSingleton }  from '../../page.singleton';
import { BasePage } from '../base-page';

let myInstance: PageSingleton = PageSingleton.getInstance();
let coursesElements: CoursesElements;

export class CoursesActions extends BasePage {

    constructor() {
        super();
        myInstance = PageSingleton.getInstance();
        coursesElements = new CoursesElements(myInstance.getPage());
    }

    public async isCoursesContainerVisible(): Promise<Boolean> {
        await this.waitForVisibility(coursesElements.coursesContainer);
        return coursesElements.coursesContainer.isVisible();
    }

}
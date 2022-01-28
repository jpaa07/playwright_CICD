import { HomeElements } from './home.elements';
import { PageSingleton }  from '../../page.singleton';

let myInstance: PageSingleton = PageSingleton.getInstance();
let homeElements: HomeElements;

export class HomeActions {

    constructor() {
        myInstance = PageSingleton.getInstance();
        homeElements = new HomeElements(myInstance.getPage());
    }

    public isLogoVisible(): Promise<Boolean> {
        return homeElements.homeLogo.isVisible();
    }

    public selectCoursesLink(): Promise<void> {
        return homeElements.courseLink.click();
    }
}

import { Locator } from "@playwright/test";

export class BasePage {
    constructor() {}

    /**
     * This method allows to wait for an element to be visible in the application
     * @param locator Element that need to be waited for visibility
     * @param timeout max time to wait for locator visibility
     * @returns 
     */
    protected waitForVisibility(locator: Locator, timeout = 10000): Promise<void> {
        return locator.waitFor({ state: "visible", timeout });
    }
}
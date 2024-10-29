import { Page, Locator, expect } from "@playwright/test";
import { Constants, Timeouts } from "../constants/web-constants";

export class ElementActions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
    * Navigate to a URL.
    * @param url - The url to navigate.
    * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
    */
    async navigateToUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
    * Click on an element.
    * @param locator - The element to click on.
    * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
    */
    async clickElement(locator: Locator, waitTimeOut = Timeouts.MEDIUM) {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        await locator.click();
    }

    /**
     * Input text into a textbox.
     * @param locator - The element representing the textbox.
     * @param inputText - The text to input.
     * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
     */
    async inputText(locator: Locator, inputText: string, waitTimeOut = Timeouts.MEDIUM) {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        await locator.clear();
        await locator.fill(inputText);
    }

    /**
    * Toggle a checkbox based on the provided boolean state.
    * @param locator - The element representing the checkbox.
    * @param shouldCheck - The boolean value to check.
    * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
    */
    async toggleCheckbox(locator: Locator, shouldCheck: boolean, waitTimeOut = Timeouts.MEDIUM) {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        const isChecked = await locator.isChecked();
        if (isChecked !== shouldCheck) {
            shouldCheck ? await locator.check() : await locator.uncheck();
        }
    }

    /**
     * Select an option from a dropdown by visible text.
     * @param locator - The element representing the dropdown.
     * @param text - The visible text to select from dropdown.
     * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
     */
    async selectOptionByText(locator: Locator, text: string, waitTimeOut = Timeouts.MEDIUM) {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        await locator.selectOption({ label: text });
    }

    /**
    * Verify that an element is visible on the page.
    * @param locator - The element that needs to be visible.
    */
    async verifyVisibility(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    /**
     * Get text and verify exact text content of an element.
     * @param locator - The element to get the text.
     * @param expectedText - The text to be verified.
     * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
     */
    async getTextAnfverifyExactText(locator: Locator, expectedText: string, waitTimeOut = Timeouts.MEDIUM) {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        await expect(locator).toHaveText(expectedText);
    }

    /**
     * Get text and verify exact text content of an element.
     * @param locator - The element to get the text.
     * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
     */
    async getText(locator: Locator, waitTimeOut = Timeouts.MEDIUM): Promise<string> {
        await this.waitForElementToBeVisible(locator, waitTimeOut);
        return (await locator.textContent()) || '';
    }

    // 
    /**
    * Wait until an element is visible with a specified timeout.
    * @param locator - The element to verify till its is visible.
    * @param waitTimeOut - The timeout for element display (default: Timeouts.MEDIUM).
    */
    async waitForElementToBeVisible(locator: Locator, waitTimeOut: number = Timeouts.MEDIUM) {
        await locator.waitFor({
            state: 'visible',
            timeout: waitTimeOut,
        });
    }
}
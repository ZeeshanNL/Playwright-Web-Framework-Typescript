import { expect, Locator, Page } from '@playwright/test';
import { Constants } from '../constants/web-constants';
import { ElementActions } from '../elementActions/webElementActions';
import { LoginPageElements } from '../pages/loginPage';

export class LoginHelper {
    readonly page: Page;
    readonly ElementActions: ElementActions;
    readonly LoginPageElements: LoginPageElements;


    constructor(page: Page) {
        this.page = page;
        this.ElementActions = new ElementActions(page);
        this.LoginPageElements = new LoginPageElements(page);
    }

    async navigateToLoginPage() {
        await this.ElementActions.navigateToUrl(Constants.BASE_URL);
    }

    async login(username: string, password: string) {
        await this.ElementActions.inputText(this.LoginPageElements.usernameField, username);
        await this.ElementActions.inputText(this.LoginPageElements.passwordField, password);
        await this.ElementActions.clickElement(this.LoginPageElements.loginButton);
    }

    async verifyErrorMessage() {
        await this.ElementActions.getTextAnfverifyExactText(this.LoginPageElements.errorMessae, 'Epic sadface: Username and password do not match any user in this service');
    }

    async verifyProductsHeader() {
        await this.ElementActions.getTextAnfverifyExactText(this.LoginPageElements.productsHeader, 'Products');
    }
}
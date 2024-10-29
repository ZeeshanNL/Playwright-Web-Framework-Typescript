import { expect, Locator, Page } from '@playwright/test';
import { ElementActions } from '../elementActions/webElementActions';

export class LoginPageElements {
  readonly page: Page;
  readonly ElementActions: ElementActions;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessae: Locator;
  readonly productsHeader: Locator;

  constructor(page: Page) {
    this.page = page;
   
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessae = page.locator('//h3[@data-test="error"]');
    this.productsHeader = page.locator('//span[@class="title"]')
  }
}
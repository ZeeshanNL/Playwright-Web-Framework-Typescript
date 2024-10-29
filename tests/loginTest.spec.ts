import { test, expect } from '@playwright/test';
import { LoginHelper } from '../helper/login.helper';
import { LoginPageElements } from '../pages/loginPage';
import { Constants } from '../constants/web-constants';

test.describe('Login Tests', () => {
  let loginHelper: LoginHelper;
  let loginpageElements: LoginPageElements;

  test.beforeEach(async ({ page }) => {
    loginpageElements = new LoginPageElements(page);
    loginHelper = new LoginHelper(page);
    await loginHelper.navigateToLoginPage();
  });

  test.afterEach(async ({ page }) => {
    page.close();
  });

  test('Successful Login', async ({ page }) => {
    await loginHelper.login(Constants.USERNAME, Constants.PASSWORD);
    await loginHelper.verifyProductsHeader();
  });

  test('Login with Invalid Credentials', async () => {
    await loginHelper.login(Constants.WRONG_USERNAME, Constants.WRONG_PASSWORD);
    await loginHelper.verifyErrorMessage();
  });
});

import {test,expect} from '@playwright/test';

test('Test1', async({ page }) => {
    console.log("Test1");
    await page.goto('https://playwright.dev/');
})


test('Test2', async({ page }) => {
    console.log("Test2");
    await page.goto('https://saucedemo.com/');
})
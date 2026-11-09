import{test, expect} from '@playwright/test';

test('My First Tes',async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator('textarea[id="ti6dpd"]').fill('Playwright')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    const results=await page.locator('span[class="gV2Mfd"]').allTextContents()
    //await expect(results.length).toBeGreaterThan(0)
    console.log(results)
})
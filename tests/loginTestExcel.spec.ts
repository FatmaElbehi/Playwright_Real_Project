import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { loginData, readExcelFile } from '../utils/excelReader';

const loginData: loginData[] = readExcelFile('./test-data/loginData.xlsx', 'Sheet1');

test.describe('Login Tests - Excel Data', () => {
    for(const data of loginData) {
         //if(data.run !== 'yes') continue;

         test(`Login Test - ${data.username}`, async ({ page }) => {
            test.skip(data.run !== 'yes', 'Run flag=NO');
            
            const loginPage = new LoginPage(page);
            await test.step('Go to login Page ', async({}) =>{
                await loginPage.gotoLoginPage('https://www.saucedemo.com/');
            })

            await test.step('Perform login', async({}) =>{
                await loginPage.login(data.username, data.password);
            })

            await test.step('Validate Results', async({}) =>{
            if(data.expected === "Success") {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            }else{
                    await expect(loginPage.errorMessage).toBeVisible();
                }
            })
            
         })
    }
})


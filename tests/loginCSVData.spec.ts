import{test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import {readCSVFile} from "../utils/csvReader"

const csvData = readCSVFile('test-data/loginData.csv')

csvData.forEach((data: any) =>{
    if(data.run !== 'true') return;

    test(`Login Test - ${data.username}`,async({page})=>{
        const loginPage=new LoginPage(page)
        await loginPage.gotoLoginPage('https://www.saucedemo.com/')
        await loginPage.login(data.username, data.password)
        if(data.expected === "Success"){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }else{
            await expect(loginPage.errorMessage).toBeVisible()
        }
    })
})


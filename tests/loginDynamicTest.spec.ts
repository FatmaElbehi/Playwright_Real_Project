import{test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import loginData from '../test-data/loginDataNew.json'

loginData.forEach((data) =>{
    if(!data.run) return;
    test(`Login Test - ${data.username}`,async({page})=>{
        const loginPage=new LoginPage(page)
        await loginPage.gotoLoginPage(data.urlApp)
        await loginPage.login(data.username, data.password)
        if(data.expected === "Success"){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        }else{
            await expect(loginPage.errorMessage).toBeVisible()
        }
    })
})


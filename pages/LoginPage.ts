import{Locator, Page} from '@playwright/test'

export class LoginPage{
    readonly page : Page
    readonly username: Locator
    readonly password: Locator
    readonly buttonLogin: Locator
    readonly errorMessage: Locator

    constructor(page : Page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.buttonLogin=page.locator('#login-button')  
        this.errorMessage=page.locator('h3[data-test="error"]')
    }

    async gotoLoginPage(url:string){
        await this.page.goto(url)  
    }

    async login(usernameInput: string, passwordInput: string){
        await this.username.fill(usernameInput)
        await this.password.fill(passwordInput)
        await this.buttonLogin.click()
    }
    
    // async verifyLoginSuccess(){
    //     await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
    // }

}
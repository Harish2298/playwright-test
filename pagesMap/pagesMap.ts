import config from "../config";
import { Page } from "@playwright/test"

export class LoginPage{
    username: string;
    page: Page;
    password: string;

    constructor (page:Page){
        this.page = page   
    }
    
   async launchBrowser (){
    let myObject;
    console.log(myObject.goto);
    await this.page.goto("https://www.amazon.in/");
   }
    
   }



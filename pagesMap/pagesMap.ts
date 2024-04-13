import config from "../config";
import { Page } from "@playwright/test"

export class loginPage{
    username: string;
    page: Page;
    password: string;

    constructor (page:Page){
        this.page = page
        
    }

   async launchBrowser (){
    await this.page.goto(config.baseUrl);
   }
    
   }



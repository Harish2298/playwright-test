import{BeforeAll, Before, After, AfterAll, Status, AfterStep, setDefaultTimeout} from "@cucumber/cucumber";
import { Browser, chromium } from "playwright";
import config from "./config";
export var browser : Browser;

setDefaultTimeout(100 * 1000);
var booleanValue = config.headless;


BeforeAll(async function () {
    browser = await chromium.launch({
        args: ["--start-maximized"],
        headless: booleanValue    
});

AfterAll(async function () {
    await browser.close();   
});

Before(async function () {
    this.context = await browser.newContext({ viewport : null});
    this.page = await this.context.newPage();  
});

AfterStep(async function (step) {
    if(step.pickleStep.text.includes("Verify")){
        this.attach(
            await this.page.screenshot({path: "./screenshots/" + step.pickleStep.id + ".png" , fullPage: true }), "image/png");
}   
});

After(async function (Scenario) {
    if(Scenario.result!. status === Status.FAILED){
        this.attach(await this.page.screenshot({path: "./screenshots/" + Scenario.pickle.name + ".png" , fullPage: true }), "image/png");
    }   
});

//  await this.page.close();
//  await this.context.close();  
})
import { Page } from "playwright-test";
import { Given } from "@cucumber/cucumber";
import { LoginPage } from "../pagesMap/pagesMap";


Given("I am in the amazon home page", function () {
    const loginPage: LoginPage = new LoginPage(this.page);
    loginPage.launchBrowser();
  });


require('chromedriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

const locators  = {
    

}


describe('TestTask1', () => {

    const driver = new Builder().forBrowser('chrome').build();
    

    before(async () =>{


    });
 
    after(async()=>{
 

 
    });
    
    beforeEach(async()=>{
        
      let  loginScreenElements = require('./UILocators');
      let  loginCredentials = require('./TestUtilities');

      await driver.get(loginCredentials.getWebsiteUrl());
      await driver.sleep(5000);

      driver.findElement(By.css(loginScreenElements.LoginScreen.USERNAMEFIELD)).sendKeys(loginCredentials.getUserame());
      await driver.sleep(1000);
      driver.findElement(By.css(loginScreenElements.LoginScreen.PASSWORDFIELD)).sendKeys(loginCredentials.getPassword());
      await driver.sleep(1000);
      driver.findElement(By.css(loginScreenElements.LoginScreen.LOGIN_BUTTON)).click();
      await driver.sleep(5000);  
    
    });
 
    afterEach(async()=>{
 
   
 
    });

    

  

    it('MainScenario', async () => {
        
        let  DashboardScreen = require('./UILocators');

        let  ShopScreen = require('./UILocators');

        let  ThemeScreen = require('./UILocators');
       
        driver.findElement(By.css(DashboardScreen.DasboardUIElements.DASHBOARD_APPBUTTON)).click();
        
        await driver.sleep(5000);

        driver.findElement(By.css(DashboardScreen.DasboardUIElements.DASHBOARD_SHOPBUTTON)).click();
        
        await driver.sleep(8000);

        driver.findElement(By.css(DashboardScreen.DasboardUIElements.DASHBOARD_THEMESBUTTON)).click();

        await driver.sleep(12000);

        driver.findElement(By.css(ThemeScreen.THEMES_UI_ELEMENTS.NEWTHEME_BUTTON)).click();

        await driver.sleep(12000);

        driver.findElement(By.css(ShopScreen.ShopUIElements.TEXT_LABEL)).click();
        
        await driver.sleep(7000);
        
        changeLabelText();
       
       await driver.sleep(7000);
    });


    function changeLabelText(){

      driver.executeScript('document.querySelector("#content > div.canvas-container > pe-editor-canvas").shadowRoot.querySelector("div > div > pe-builder-elements-document > pe-builder-elements-section:nth-child(2) > pe-builder-elements-text > div").innerText="This is the compeletion of the task"');
      
    }



    after(async () => driver.quit());
});
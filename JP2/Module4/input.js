const puppeteer = require('puppeteer');
const pin = "110001";

(async () => {
    const browser = await puppeteer.launch({headless:false, 
                args: ["--start-maximized", "--disable-notifications"]
    });
    const page = await browser.newPage();
    await page.goto('https://www.cowin.gov.in/');
    // await page.screenshot({ path: 'example.png' });
    // await page.pdf({ path: 'file1.pdf', format: 'a4' });
      // await browser.close();
     
      await page.waitForSelector(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");
      await page.evaluate(function(){
          let Alltags = document.querySelectorAll(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");
          Alltags[1].click();
          return;
      })

      await page.waitForSelector(".pin-search input");
      await page.type(".pin-search input", pin);
        await page.waitForSelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
        // await page.waitForTimeout(50000)
      await page.evaluate(function(){
        let searchBtn = document.querySelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
          searchBtn.click();
          return;
      })



      
  })();
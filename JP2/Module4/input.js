const puppeteer = require('puppeteer');
const pin = process.argv[2];

(async () => {
    const browser = await puppeteer.launch({headless:false, 
                defaultViewport: null,
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
       await waitAndClick(".searchBtn.pin-search-btn.accessibility-plugin-ac",page);
      //   await page.waitForSelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
      //   // await page.waitForTimeout(50000)
      // await page.evaluate(function(){
      //   let searchBtn = document.querySelector(".searchBtn.pin-search-btn.accessibility-plugin-ac");
      //     searchBtn.click();
      //     return;
      // })
       await page.waitForSelector(".item.active .availability-date");
       await page.waitForSelector(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted");
        await page.waitForTimeout(5000);
       
       let arr = await page.evaluate(function(){
         let a = [];
         let allDates = document.querySelectorAll(".item.active .availability-date");
         let allVaccinationCentres = document.querySelectorAll(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted")
         for(let i =0; i<allDates.length; i++){
           console.log(allDates[i].textContent);
           let currentDate = allDates[i].textContent;
           for(let j = 0 ; j<allVaccinationCentres.length ; j++){
             let VCName = allVaccinationCentres[j].querySelector(".row-disp .center-name-title").textContent.trim();
             let VCAddress = allVaccinationCentres[j].querySelector(".row-disp .center-name-text").textContent.trim();
             let VaccineName = allVaccinationCentres[j].querySelector(".vaccine-list .vaccine-details").textContent.trim();
             let ageGroup = allVaccinationCentres[j].querySelector(".session-details span").textContent.split(":")[1].trim();
             let dose = allVaccinationCentres[j].querySelectorAll(".session-details span")[1].textContent.split(":")[1].trim();
             let allSlots = allVaccinationCentres[j].querySelectorAll(".slots-box.ng-star-inserted")[i].textContent.trim();
            if(allSlots != "N/A" && allSlots != "Booked"){
              let obj = {
                Date : currentDate,
                Name : VCName,
                Address : VCAddress,
                Vaccine : VaccineName,
                Age : ageGroup,
                Dose : dose,
                slot : allSlots
              }
  
              a.push(obj);
            }
           
          }

         }

         
         return a;
       })
  
       console.log(arr)
       browser.close();


   

      async function waitAndClick(selector , page){
        await page.waitForSelector(selector);
        await page.waitForTimeout(2000);
        let selectorClicked = page.click(selector);
        return selectorClicked;

      }


      
  })();
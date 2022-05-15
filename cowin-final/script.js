const puppeteer = require('puppeteer');
let xlsx = require("json-as-xlsx");

let fs = require("fs");

const pin = process.argv[2];
const age = Number(process.argv[3]);

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
  });
  const page = await browser.newPage();
  await page.goto('https://www.cowin.gov.in/');
  // await page.screenshot({ path: 'example.png' });
  // await page.pdf({ path: 'file1.pdf', format: 'a4' });
  
  await page.waitForSelector(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");

 
  await page.evaluate(function () {
    let Alltags = document.querySelectorAll(".mat-ripple.mat-tab-label.mat-focus-indicator.ng-star-inserted");
    Alltags[1].click();
    return;
  })

  await page.waitForSelector(".pin-search input");
  await page.type(".pin-search input", pin);
  await waitAndClick(".searchBtn.pin-search-btn.accessibility-plugin-ac", page)
  await page.waitForTimeout(8000)
  // await page.evaluate(function(age){
  //   let allAge = document.querySelectorAll("ul label.accessibility-plugin-ac");
  //   if(age>=12 && age<=14){
  //     allAge[0].click();
  //   }else if(age>=15 && age<=18){
  //     allAge[1].click();
  //   }else if(age>18){
  //     allAge[2].click();
  //   }
  //   return;
  // },age)
  await page.evaluate(function(age){
    let allAges = document.querySelectorAll("ul label.accessibility-plugin-ac")
      if(age>=12 && age<=14){
       allAges[0].click();
       
    }

    else if(age>=15 && age<=18){
      allAges[1].click();
      
    }

    else if(age>18) {
      allAges[2].click();
      
      
    }
    return;
  },age)
  // await page.waitForTimeout(5000)
  await page.waitForSelector(".item.carousel-item.ng-star-inserted.active");
  // await page.waitForSelector(".item.active li");
  await page.waitForSelector(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted")

  let arr = await page.evaluate(function () {
    let a = [];
    let allDates = document.querySelectorAll(".item.carousel-item.ng-star-inserted.active");
    let allVCs = document.querySelectorAll(".col-sm-12.col-md-12.col-lg-12.cvc-list-item.ng-star-inserted");
    for (let i = 0; i < allDates.length; i++) {
      // console.log(allDates[i].textContent);
      let date = allDates[i].textContent;
      for (let j = 0; j < allVCs.length; j++) {
        // // console.log(allVCs[j].textContent);
        let centreName = allVCs[j].querySelector(".row-disp .center-name-title").textContent.trim();
        let centreAddress = allVCs[j].querySelector(".row-disp .center-name-text").textContent.trim();
        let vaccineName = allVCs[j].querySelector(".row-disp .vaccine-details").textContent.trim();
        let ageGroup = allVCs[j].querySelector(".row-disp div .session-details span").textContent.split(":")[1].trim();
        let dose = allVCs[j].querySelectorAll(".row-disp div .session-details span")[1].textContent.split(":")[1].trim();
        let slots = allVCs[j].querySelectorAll(".slots-box.ng-star-inserted")[i].textContent.trim();
        if (slots != 'N/A' && slots != 'Booked') {
          let obj = {
            Date: date,
            Name: centreName,
            Address: centreAddress,
            Vaccine: vaccineName,
            Age: ageGroup,
            Dose: dose,
            SlotsAvailable: slots

          }

          a.push(obj);
        }

      }

    }

    return a;


  })
  // console.log(arr)
  let vaccineSchedule = JSON.stringify(arr);
  fs.writeFileSync("ScheduleOf Vaccination.json", vaccineSchedule)
  let data = [
    {
      sheet: "VaccinationSchedule",
      // "Date": " Wed, 27 Apr ",
      // "Centre": "UPHC Budh Vihar.",
      // "CentreAddress": "Near Budh Vihar Bahrampur Nai Basti Dundahera Ghaziabad Uttar Pradesh 201009, Ghaziabad, Uttar Pradesh, 201009",
      // "Vaccine": "COVISHIELDFree",
      // "AgeGroup": "18 & Above",
      // "Dose": "#1",
      // "Slots": "200 Slots"
      columns: [
        { label: "Date", value: "Date" },
        { label: "Name", value: "Name" },
        { label: "Address", value: "Address" },
        { label: "Vaccine", value: "Vaccine" },
        { label: "Age", value: "Age" },
        { label: "Dose", value: "Dose" },
        { label: "SlotsAvailable", value: "SlotsAvailable" },

      ],
      content: arr

    },

  ]

  let settings = {
    fileName: "ScheduleOfVaccine", // Name of the resulting spreadsheet
    extraLength: 7, // A bigger number means that columns will be wider
    writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
  }

  xlsx(data, settings)
  console.log(vaccineSchedule);
  browser.close();


  async function waitAndClick(selector, page) {
    await page.waitForSelector(selector)
    await page.waitForTimeout(2000)
    let selectorClicked = page.click(selector);
    return selectorClicked;
  }


})();
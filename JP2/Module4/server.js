const express = require('express')
const app = express()
const path = require("path");
const cp = require("child_process")
const nodemailer = require("nodemailer");



// app.get('/hello', function (req, res) {
//     res.send('Hey you are saying hello')
//   })

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "akanksha.gupta@pepcoding.com", // generated ethereal user
    pass: "eydlrazyjgvswvvctt", // generated ethereal password
  },
});

app.get('/details/:pin/:age/:email', async function(req, res) {
    // res.send(req.params.pin)
    let pin = req.params.pin;
    let age = req.params.age;
    let email = req.params.email;
    let result = cp.execSync(`node input ${pin} ${age}`)
    res.send(result);

    let info = await transporter.sendMail({
      from: '"Akanksha Gupta 👻" <noreply@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Fight against Covid", // Subject line
      text: "Vaccination Schedule", // plain text body
      html: "<b>Vaccination Schedule</b>", // html body
      attachments: [{path: "./VaccinationSchedule.xlsx"}]
    });
    console.log("Message sent: %s", info.messageId);

    // res.send("I am printing random input value");
})

app.get('/', function (req, res) {
    let pathOfIndexFile = path.join(__dirname,'index.html')
    res.sendFile(pathOfIndexFile)
    
  })

app.listen(4000)
console.log("Server is running")
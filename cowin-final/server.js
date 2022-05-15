const express = require('express');
const path = require("path");
const cp = require("child_process");
const app = express();
const nodemailer = require("nodemailer");
let PORT = process.envPORT || 3000;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "akanksha.gupta@pepcoding.com", // generated ethereal user
    pass: "vkueffoxmxzfbjpj", // generated ethereal password
  },
});


app.get('/', function (req, res) {
  let pathOfFile = path.join(__dirname, 'index.html')
  res.sendFile(pathOfFile);
})

// app.get('/hello', function(req,res){
//     res.send("hey hello from my side")
// })

// app.get('/bye', function(req,res){
//     res.send("hey bye from my side")
// })

app.get('/details/:pin/:age/:email',async function(req,res){
    // res.send(req.params.pin)
    let pin = req.params.pin;
    let age = req.params.age;
    let email = req.params.email;
    let result = cp.execSync(`node script ${pin} ${age}`)
    res.send(result);
    let info = await transporter.sendMail({
      from: '"Akanksha Gupta 👻" <noreply@example.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Fight Against Covid", // Subject line
      html: "<b>Schedule of Vacinnation</b>", // plain text body
      attachments: [{path:"./ScheduleOfVaccine.xlsx"}], // html body
    });

    console.log("Message sent: %s" , info.messageID);

})



app.listen(PORT,function(req,res){
  console.log("My server is running");
})

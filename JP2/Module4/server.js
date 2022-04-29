const express = require('express')
const app = express()
const path = require("path");
const cp = require("child_process")



// app.get('/hello', function (req, res) {
//     res.send('Hey you are saying hello')
//   })

app.get('/details/:pin', function(req, res) {
    // res.send(req.params.pin)
    let pin = req.params.pin;
    let result = cp.execSync(`node input ${pin}`)
    res.send(result);
    // res.send("I am printing random input value");
})

app.get('/', function (req, res) {
    let pathOfIndexFile = path.join(__dirname,'index.html')
    res.sendFile(pathOfIndexFile)
    
  })

app.listen(4000)
console.log("Server is running")
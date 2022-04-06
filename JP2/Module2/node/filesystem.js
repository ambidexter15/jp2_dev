let fs = require("fs");

//create, read, write, update, delete
// //read
// let output = fs.readFileSync("abc.txt");
// console.log("reading file abc: " + output);

//create
// fs.openSync("xyz.txt", 'w');

//add 
// 1. writeFileSync -> replaces the existing content
// 2. if file exists then it just replaces the existing data in the file else it creates a new file.
fs.writeFileSync("xyz.txt", "Hey I am a txt file named as XYZ");
fs.writeFileSync("xyz.txt", "Hey I am there as XYZ");
fs.writeFileSync("ghi.txt", "I am a text file");


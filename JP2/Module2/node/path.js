let path = require("path");

let extension = path.extname(path.join(__dirname, "abc.txt"));
console.log(extension);

let name = path.basename(path.join(__dirname, "abc.txt"));
console.log(name);

console.log(__dirname);
console.log(__filename);
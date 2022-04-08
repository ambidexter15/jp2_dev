//strings
let str = "let's learn string"
console.log(str);

console.log(str.length);

let upstring = str.toUpperCase();
console.log(upstring);

let downstring = str.toLowerCase();
console.log(downstring);

let slice1 = str.slice(3);
console.log(slice1);
let slice2 = str.slice(3,7);
console.log(slice2);

let example = "01234567";
console.log(example.slice(2));
console.log(example.slice(2,5));


let fname = "Akanksha";
let sname = "Gupta";
let full_name = fname.concat(" "+ sname);
console.log(full_name);
// to replace any word in string
let replstring = str.replace("learn", "study");
console.log(replstring);


let text = "                       hey I am a pepcoder";
console.log(text);
console.log(text.length);

let trimmedtext = text.trim();
console.log(trimmedtext);
console.log(trimmedtext.length);
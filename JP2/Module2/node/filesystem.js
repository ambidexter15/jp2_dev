let fs = require("fs");

//files
//create, read, write, update, delete

// //read
// let output = fs.readFileSync("abc.txt");
// console.log("reading file abc: " + output);

//create
// fs.openSync("xyz.txt", 'w');

//add 
// 1. writeFileSync -> replaces the existing content
// 2. if file exists then it just replaces the existing data in the file else it creates a new file.
// fs.writeFileSync("xyz.txt", "Hey I am a txt file named as XYZ");
// fs.writeFileSync("xyz.txt", "Hey I am there as XYZ");
// fs.writeFileSync("ghi.txt", "I am a text file");

//append
// fs.appendFileSync("ghi.txt", " I am second line ");

// fs.unlinkSync("ghi.txt");


//folder -> directory
//create , delete , add files, read content of folder 

//create
// fs.mkdirSync("MyDirectory");

// add files 
// fs.writeFileSync("MyDirectory/new_file.txt","I am a file inside a folder" );

// lets create 10 folders, and create 2 files inside each of these 10 folders. 

// for(let i=1; i<=10; i++)
// {
//     let DirectoryName = `New_Directory-${i}`;
//     fs.mkdirSync(DirectoryName);
//     fs.writeFileSync(DirectoryName+ "\\" + "file1.txt", `I am first file of ${DirectoryName}`);
//     fs.writeFileSync(DirectoryName+ "\\" + "file2.txt", `I am second file of ${DirectoryName}`);

// } 

// to check the content of a folder
//  let content = fs.readdirSync("New_Directory-6");
//  console.log(content);

// let content = fs.readdirSync("MyDirectory");
// console.log(content);

// fs.unlinkSync("MyDirectory/"+content);

// folder delete
// fs.rmdirSync("MyDirectory");

// console.log(fs.existsSync("MyDirectory"));
// console.log(fs.existsSync("New_Directory-1"));

//lstatSync 

















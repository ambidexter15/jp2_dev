let fs = require("fs");
let path = require("path");

// srcfolder path ->  C:\Users\user\Desktop\JP2\Module2\File_oraginzer\src

let srcFolder = process.argv.slice(2)[0];
// console.log(srcPath);

let extension = {
    Document : ['.doc' , '.pdf' , '.ppt' , '.txt', '.xls'],
    Image : ['.jpg' , '.gif' , '.png' ,'.jpeg'],
    Videos : ['.mov' , '.mp4'],
    Audios : ['.mp3'],
    Codes : ['.html' , '.js' ,'.css' ,'.cpp' ],

}

function checkFolder(extName, srcFolder)
{
   
}

function organizeFolder(srcFolder){
   let exist = fs.existsSync(srcFolder);
   if(exist == true)
   {  // yes the path exists 
     //reading each and every file of this folder
     let content = fs.readdirSync(srcFolder);
       for(let i = 0; i<content.length; i++)
       {
           let extName = path.extname(content[i]);
        //    console.log(content[i], "----->" , extName);
        //    checking if the folder exists for this type of extension file or not
        let extensionFolder = checkFolder(extName, srcFolder);
        if(extensionFolder==true)
        {
            //move the file
        }

        else{
            //create a folder
            //move the file
        }


         

       }
       
   }

   else{
        // no the input path is not correct
       console.log("Please input the correct path");
   }
}


organizeFolder(srcFolder);


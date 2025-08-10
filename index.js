/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from 'fs';
import  qr from "qr-image";
inquirer
  .prompt([
     { name:"url",
        message:'Enter URL:'}
  ])
  .then((answers) => {
var url=answers.url;
var image = qr.imageSync(url, { type: 'png' });

fs.writeFile("img.png",image,(err)=>{
if (err) throw err;
 console.log('✅ QR image saved as qr_image.png');
});
fs.writeFile("text.txt",url,(err)=>{
if(err) throw err;
console.log("url is saved");
});
  })
  .catch((error) => {
   if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment');
    } else {
      console.error('An error occurred:', error);
    }

  });

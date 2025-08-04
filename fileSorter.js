const fs = require('fs');
require('dotenv').config();
const filePath = process.env.FILE_PATH;

fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
        console.error('Error reading file:', err);
        return
    }
    let changedText = data.replace('2', '4')
    fs.writeFile(filePath, changedText, (err) =>{
        if(err){
            console.log('Error writing file;', err);
            return
        }else{
            console.log('TextFile has been changed')
        }
    })
    console.log(data, changedText)
    });
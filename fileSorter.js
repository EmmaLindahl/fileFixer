const fs = require('fs')

fs.readFile('C:\\Users\\emmas\\Desktop\\filestorter\\test.txt', 'utf8', (err, data) => {
    if(err){
        console.error('Error reading file:', err);
        return
    }
    let changedText = data.replace('2', '4')
    fs.writeFile('C:\\Users\\emmas\\Desktop\\filestorter\\test.txt', changedText, (err) =>{
        if(err){
            console.log('Error writing file;', err);
            return
        }else{
            console.log('TextFile has been changed')
        }
    })
    console.log(data, changedText)
    });

const fs = require('fs');
const path = require('path');

const readerStream = fs.createReadStream(path.join(__dirname, 'badi_file.txt'))

const writeStream = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

readerStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log("Bhai, pipe ke zariye poori file copy-paste ho gayi!'")
})
const fs =require('fs')

const readerStream =fs.createReadStream('badi_file.txt',{
    encoding:'utf-8',
    highWaterMark:16*1024
});

readerStream.on('data',(chunk)=>{
    console.log("----NAya chunk aya ----");
    console.log(chunk);
});

readerStream.on('end',()=>{
    console.log('Bhai, poori file read ho gayi successfully!')
})

// Topic 3: Writable Stream (Data Write Karna)

const writeStream=fs.createWriteStream('nayi_file.txt');

writeStream.write('Hey Saif, yeh pehla chunk gaya!\n', 'utf8');
writeStream.write('Bhai, yeh dusra chunk bhi gaya.\n', 'utf8');

writeStream.end();

writeStream.on('finish',()=>{
    console.log("Bhai, saara data file me write ho gaya successfully!")
})

writeStream.on('error',(err)=>{
    console.log('Kuch gadbad hui write karte waqt:', err.message)
})
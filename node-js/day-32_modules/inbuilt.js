const os= require('os');
const freeMemory = os.freemem();
console.log("OS Architecture: ",os.arch());
console.log(`Free Memory: ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
console.log("Platform:", os.platform())

const path =require('path');

const fullPath=path.join("School_ERP","document","report.txt");

console.log("Sahi rasta: ",fullPath);
// Kisi file ka extension pata karna
const ext=path.extname('invoice.pdf');

console.log("File Type:" , ext);

const fs= require('fs');

fs.writeFileSync('server_logs.txt','School_ERP started at 10:00 AM');
console.log("File ban gai bhai!");

const data =fs.readFileSync('server_logs.txt','utf-8');
console.log("File ke andr likha hai ", data )
const http=require('http')
const fs=require('fs')
const path=require('path')

const server =http.createServer((req, res)=>{
    if(req.url==='/download'){
        const filePath=path.join(__dirname,'badi_file.txt')

        res.writeHead(200,{
            'Content-Type':'text/plain',
            'Content-Disposition':'attachment; filename="student_report.txt"'

        });

        const fileStream=fs.createReadStream(filePath);

        fileStream.pipe(res);

    }else{
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.end(' <h1>Welcome to ERP! <a href="/download">Download Report</a></h1> ')
    }
})
server.listen(3000,()=>{
    console.log('Server chal gaya bhai http://localhost:3000 par!')
})
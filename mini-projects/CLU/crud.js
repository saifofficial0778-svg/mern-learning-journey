import fs from 'fs';
import path from 'path';
import {EventEmitter} from 'events';

const myEmitter=new EventEmitter();

const [ , ,command,fileName,fileContent]=process.argv;
const filePath=path.join(process.cwd(),fileName);

myEmitter.on('fileAction',(action,name)=>{
    console.log(`📢 [EVENT ALERT]: Operation '${action}' done on file: ${name}`)
})

if(command==='create'){
    console.log("aap file bnana chah rhe ho")
   fs.writeFileSync(filePath,fileContent || '');
   myEmitter.emit('fileAction','CREATE',fileName);
   

}else if(command==='read'){
    console.log("aap file read krna chah rhe ho")
    const data=fs.readFileSync(filePath,'utf-8');
     console.log("file ke andar ka saman: ", data);
      myEmitter.emit('fileAction','READ',fileName);
}else{
    console.log("aap file delete krna chah rhe ho")
    fs.unlinkSync(filePath);
    console.log("file deleted succesfully")
     myEmitter.emit('fileAction','DELETE',fileName);
}
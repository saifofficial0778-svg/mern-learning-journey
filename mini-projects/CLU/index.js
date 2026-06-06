import fs from 'fs';
import path from 'path';

const [ , , command,text]=process.argv;
const filePath=path.join(process.cwd(),'secret.txt');

const encrypt=(plainText)=>{
    return plainText
    .split('')
    .map(char=> String.fromCharCode(char.charCodeAt(0)+1))
    .join('');
};

const decrypt=(cipherText)=>{
    return cipherText
    .split('')
    .map(char=> String.fromCharCode(char.charCodeAt(0)-1))
    .join('');
};

if(command==='encrypt'){
    if(!text){
        console.log("Bhai, text toh likho encrypt karne ke liye!")
        process.exit(1);
    }

    const encryptedData=encrypt(text);
    fs.writeFileSync('secret.txt',encryptedData);
    console.log("File ban gai bhai!", encryptedData);
}else if(command==='decrypt'){
    if(fs.existsSync('secret.txt')){
        const fileData = fs.readFileSync('secret.txt','utf-8')

        const originalText= decrypt(fileData);
        console.log("🔓 Decrypted Message:", originalText)
    }else{
        console.log("Bhai, pehle encrypt toh karo, secret.txt file hi nahi mili!");
    }
}
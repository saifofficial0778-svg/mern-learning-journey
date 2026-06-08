const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("Bhai, tumhara pehla Express server zinda ho chuka hai! 🎉")
})

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server ekdum ready hai boss! Running on http://localhost:${PORT}`);
})
const express=require('express')
const app=express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Bhai, Pura Server ekdum mast chal raha hai! 🔥");
})

app.get('/fee/:studentId',(req,res)=>{
    const id=req.params.studentId;
    res.send(`[PARAMS OUTPUT]: Tumne Student ID: ${id} ka data manga hai.`)
})

app.get('/fee-search',(req,res)=>{
    const status=req.query.status;
    const month=req.query.month
    res.send(`[QUERY OUTPUT]: Hum filter kar rahe hain jinki fee '${status}' hai aur mahina '${month}' hai.`)
})

app.get('/fee-submit',(req,res)=>{
    const data=req.body;
    res.send(`[BODY OUTPUT]: Student '${data.name}' ki Rs.${data.amount} fee submit ho gayi!`);
})

app.listen(3000,()=>{
    console.log(`🚀 Server ekdum ready hai boss! Running on http://localhost:${PORT}`);
})
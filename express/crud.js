const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.send("Dukan Se: Saare students ki fee list ye rhi!")
})

app.post('/fee',(req,res)=>{
    res.send("Dukan Se: Nayi fee entry register me save ho gayi!")
})
// 3. PUT Method - Purane data ko badalne ke liye
app.put('/fee', (req, res) => {
    res.send("Dukan Se: Fee entry update ho gayi hai boss!");
});

// 4. DELETE Method - Data hatane ke liye
app.delete('/fee', (req, res) => {
    res.send("Dukan Se: Fee entry delete kar di gayi hai!");
});
app.listen(3000,()=>
    console.log("Server running on 3000")
)
const express =require('express');
const app=express();

app.use(express.json());

let feesData = [
    { id: 1, studentName: "Rahul", amount: 5000, status: "pending" },
    { id: 2, studentName: "Amit", amount: 4500, status: "paid" }
];

app.get('/api/fees',(req,res)=>{
    res.json({
        success:true,
        message:"Fees list fetched successfully",
        data:feesData
    })
})

app.post('/api/fees',(req,res)=>{
    const newFee={
        id:feesData.length+1,
        studentName:req.body.studentName,
        amount:req.body.amount,
        status:req.body.status||"pending"
    }
    feesData.push(newFee);
    res.json({
        success: true,
        message: "New fee record created!",
        data: newFee
    })
})
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
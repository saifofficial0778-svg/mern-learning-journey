const express=require('express')
const app=express();
app.use(express.json());

let feesData = [
    { id: 1, studentName: "Rahul", amount: 5000, status: "pending" }
];
// 1. GET - Testing 200 OK and 404 Not Found
app.get('/api/fee/:id',(req,res)=>{
    const feeId=parseInt(req.params.id);
    const feeRecord=feesData.find(f=>f.id===feeId);

    if(!feeRecord){
        return res.status(404).json({
            success:false,
            message: `Bhai, ID ${feeId} ka koi fee record nahi mila!`
        })
    }

    res.status(200).json({
        success:true,
        data:feeRecord
    })
});

// 2. POST - Testing 201 Created and 400 Bad Request
app.post('/api/fees',(req,res)=>{
    const {studentName,amount}=req.body;

    if(!studentName||!amount){
        return res.status(400).jsone({
            success:false,
            message:"Galti aapki hai boss! studentName aur amount dono bhejna zaroori hai"
        })
    }
    const newFee={id:feesData.length+1,studentName,amount,status:"pending"};
    feesData.push(newFee);
    res.status(201).json({
        success:true,
        message:"Fee record successfully ban gaya!",
        data:newFee
    })
})
// 3. Fake Route for 401 Unauthorized (Just for understanding)
app.get('/api/admin/fee-status',(req,res)=>{
    const inValidToken=false;

    if(!inValidToken){
        return res.status(401).json({
            success:false,
            message:"Ruko! Pehle tameez se login karke aao, tabhi yeh data milega."
        })
    }
})

app.listen(3000,()=> console.log("Server running on port 3000:http://localhost:3000"))

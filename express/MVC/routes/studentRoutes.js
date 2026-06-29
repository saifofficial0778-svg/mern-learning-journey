const express=require('express')
const router=express.Router();

router.get('/all',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"sare students ka data yaha milega"
    })
});

router.post('/add',(req,res)=>{
    const newStudent=req.body
    res.status(201).json({
        success:true,
        message:"student added successfully",
        data:newStudent
    })
})

module.exports=router;
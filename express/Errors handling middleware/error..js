const express=require('express')
const app=express();
app.use(express.json());

app.get('/student/:id',(req,res,next)=>{
    try{
        const studentId=req.params.id;

        if(studentId==="0"){
            const error=new Error("Student nahi mila bhai database me!")
            error.statusCode=404;
            return next(error);
        }
        res.json({success:true,message: "Student mil gaya!"})
    }catch(err){
        next(err)
    }
});
app.use((err,req,res,next)=>{
    console.error("🚨 Backstage Lafda Alert:", err.message);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Server me kuch fatt gaya hai!";

    res.status(statusCode).json({
        success:false,
        status:statusCode,
        message:message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
})

app.listen(3000,()=>console.log('Server running on port 3000'));
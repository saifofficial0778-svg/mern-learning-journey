const express=require('express')
const AppError=require('./utils/AppError');
const globalErrorHandler=require('./controller/errorController')

const app=express();
app.use(express.json());

app.get('/attendance/report',(req,res,next)=>{
    const isReportGenerated=false;

    if(!isReportGenerated){
        return next(new AppError("Attendance report generate nahi ho payi!", 400))
    }
})
app.all(/.*/,(req,res,next)=>{
    next(new AppError(`Bhai ye ${req.originalUrl} wala route is server par nahi hai!`, 404))
})

app.use(globalErrorHandler);
module.exports=app;
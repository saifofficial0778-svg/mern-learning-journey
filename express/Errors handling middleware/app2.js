const express = require('express');
const catchAsync = require('./utils/catchAsync'); // 👈 catchAsync ko import kiya
const AppError = require('./utils/AppError');
const globalErrorHandler=require('./controller/errorController')
const app2 = express();

app2.use(express.json());

// ERP Ka ek sample route: Student Admission (Fake Database Call)
// Hamne pure async function ko catchAsync() ke andar wrap kar diya hai!
app2.post('/student/admission', catchAsync(async (req, res, next) => {
    
    // ❌ KOI TRY/CATCH NAHI LAGANA HAI AB! 🥳
    const { name, email } = req.body;

    if (!name || !email) {
        return next(new AppError("Bhai name aur email dono dena zaroori hai!", 400));
    }

    // Maan lo database me duplicate email milne par error aayi (Hum khud throw kar rahe hain)
    if (email === "test@test.com") {
        throw new AppError("Yeh email pehle se ERP me registered hai!", 400);
    }

    res.status(201).json({
        status: 'success',
        message: 'Student admitted successfully!'
    });
}));
app2.use(globalErrorHandler);
module.exports=app2;

// Baaki saare error handlers niche lage rahenge...
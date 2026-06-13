const express=require('express');
const cors=require('cors')
const {body,validationResult}=require('express-validator');
const catchAsync=require('./utils/catchAsync')
const AppError=require('./utils/AppError')
const globalErrorHandler=require('./controller/errorController')

const app3=express();
app3.use(express.json());

// ==========================================
// 🔌 1. CORS MIDDLEWARE SETTING
// ==========================================
app3.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));

// ==========================================
// 🔌 2. EXPRESS VALIDATOR MIDDLEWARE RULE
// ==========================================

const validateStudentAdmission=[
    body('name')
    .trim()
    .notEmpty().withMessage('Bhai, naam likhna zaroori hai!')
    .isLength({min:3}).withMessage('Naam kam se kam 3 akshar ka hona chahiye!'),

    body('email')
    .trim()
    .isEmail().withMessage('Bhai, email ka format sahi nahi hai!')
    .normalizeEmail(),

    body('phone')
    .isLength({min:10,max:10}).withMessage('Mobile number strictly 10 digit ka hona chahiye!')
];

// ==========================================
// 🚀 ROUTE WITH VALIDATION
// ==========================================

app3.post('/student/admission',validateStudentAdmission,catchAsync(async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

   const errorArray = errors.array();
        return next(new AppError(errorArray[0].msg, 400));
    }

    // Agar sab sahi hai toh makkhan ki tarah aage badho
    res.status(201).json({
        status: 'success',
        message: 'Student validation clear, Admitted!'
    });
    
}))

app3.use(globalErrorHandler);
module.exports=app3;
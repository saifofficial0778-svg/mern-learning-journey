const express=require('express');
const router=express.Router();

const {submitStudentFee}=require('../controllers/studentController')

router.post('/add',submitStudentFee)

module.exports=router
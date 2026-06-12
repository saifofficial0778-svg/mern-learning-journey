const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Saare students ka data yahan milega."
    })
})

router.post('/add', (req, res) => {
     const {studentName,amount}=req.body;
     const newFee={studentName,amount};
    res.status(201).json({
        success: true,
        message: "Naya student ERP me add ho gaya!",
        data:newFee
            })
})
module.exports = router
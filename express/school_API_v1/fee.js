const express = require('express');
const app = express();

// Middleware: Iske bina Express ko POST request ka JSON data samajh nahi aayega!
app.use(express.json());
// In-Memory Fee Database
let feesRecords = [
    { feeId: 101, studentId: 1, amountPaid: 5000, feeType: "Tuition Fee", status: "Paid", date: "2026-06-10" },
    { feeId: 102, studentId: 2, amountPaid: 2000, feeType: "Transport Fee", status: "Pending", date: "2026-06-12" }
];
let students = [
    { id: 1, name: "Rahul Kumar", class: "10th", rollNo: 101 },
    { id: 2, name: "Amit Singh", class: "10th", rollNo: 102 }
];

app.post('/api/fees',(req,res)=>{
    const{studentId,amountPaid,feeType,status}=req.body;

    if(!studentId||!amountPaid||!feeType||!status){
        return res.status(400).json({success:false,message:"Bhai, fees ki saari details bharo!"})
    }
    const studentExists=students.some(s=>s.id===parseInt(studentId));
    if(!studentExists){
        return res.status(404).json({success: false, message: "Bhaya, is ID ka koi student hi nahi hai system me. Fees kiski le rahe ho?"})
    }
    const newFee={
        feeId:feesRecords.length+101,
        studentId:parseInt(studentId),
        amountPaid:parseFloat(amountPaid),
        feeType,
        status,
        date:new Date().toISOString().split('T')[0]
    };
    feesRecords.push(newFee);
    res.status(201).json({success: true, message: "Fees ki entry chadh gayi hai!", data: newFee})
})

// 1. Saare fee records dekhne ke liye, ya filter karne ke liye
app.get('/api/fees', (req, res) => {
    // Interview Plus Point: Query parameters ka use!
    // Agar URL me `/api/fees?studentId=1` aaye, toh sirf us student ka dikhao
    const { studentId } = req.query;

    if (studentId) {
        const studentFees = feesRecords.filter(f => f.studentId === parseInt(studentId));
        return res.status(200).json({ success: true, data: studentFees });
    }

    // Agar koi query nahi hai, toh saari list bhej do
    res.status(200).json({ success: true, count: feesRecords.length, data: feesRecords });
});
app.put('/api/fees/:feeId', (req, res) => {
    const idOfFee = parseInt(req.params.feeId);
    const record = feesRecords.find(f => f.feeId === idOfFee);

    if (!record) {
        return res.status(404).json({ success: false, message: "Fee record hi nahi mila boss!" });
    }

    const { amountPaid, status, feeType } = req.body;

    // Sirf wahi fields update karenge jo frontend se aayi hain
    if (amountPaid !== undefined) record.amountPaid = parseFloat(amountPaid);
    if (status) record.status = status;
    if (feeType) record.feeType = feeType;

    res.status(200).json({ success: true, message: "Fee record chakachak update ho gaya!", data: record });
});
// Server running point
app.listen(3000, () => console.log("Server chal pada port 3000 par!"));

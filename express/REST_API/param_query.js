// Topic 4: Route Params vs Query Strings
const express = require('express')
const app = express();

let feesData = [
    { id: 1, studentName: "Rahul", amount: 5000, status: "pending" },
    { id: 2, studentName: "Amit", amount: 4500, status: "paid" },
    { id: 3, studentName: "Saif", amount: 6000, status: "pending" }
];

// ========================================================
// 1. QUERY STRING EXAMPLE: Filter (paid / pending / all)
// URL test karein: http://localhost:3000/api/fees?status=pending
// ========================================================

app.get('/api/fees', (req, res) => {
    const statusFilter = req.query.status;
    if (statusFilter) {
        const filteredFees = feesData.filter(f => f.status === statusFilter);
        return res.status(200).json({
            success: true,
            message: `Filtered data for status: ${statusFilter}`,
            data: filteredFees
        })
        res.status(200).json({
            success: true,
            message: "Saara data aa gaya (No filter)",
            data: feesData
        })
    }
})
// ========================================================
// 2. ROUTE PARAM EXAMPLE: Kisi ek student ki id nikalna
// URL test karein: http://localhost:3000/api/fees/2
// ========================================================
app.get('/api/fees/:id', (req, res) => {
    const feeId = parseInt(req.params.id); // req.params se id uthayi
    const record = feesData.find(f => f.id === feeId);

    if (!record) {
        return res.status(404).json({ success: false, message: "Bhai nahi mila record!" });
    }

    res.status(200).json({ success: true, data: record });
});

app.listen(3000, () => console.log("Server running on 3000"));

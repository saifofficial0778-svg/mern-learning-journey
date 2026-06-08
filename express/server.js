const express = require('express');
const app = express();
const PORT = 3000;

// 🔥 VERY IMPORTANT MIDDLEWARES
app.use(express.json()); // JSON data ke liye
app.use(express.urlencoded({ extended: true })); // 🔥 HTML Form se aane wale data ko padhne ke liye!

// Ek temporary array bana lete hain register ki tarah data store karne ke liye
let feeRegister = [];

// 1. Home page par HTML file dikhane ke liye
app.get('/', (req, res) => {
    // Isse hamara HTML form browser me khulega
    res.sendFile(__dirname + '/index.html'); 
});

// 2. Form submit hone par data yahan aayega
app.post('/fee-submit', (req, res) => {
    // HTML form ka saara data req.body me input ke 'name' attribute ke sath aata hai
    const newEntry = {
        student: req.body.studentName,
        amount: req.body.feeAmount,
        type: req.body.feeType,
        date: new Date().toLocaleDateString()
    };

    // Data ko apne register (array) me push kar do
    feeRegister.push(newEntry);

    console.log("Nayi Entry Aayi Hai Boss:", newEntry);
    console.log("Pura Register:", feeRegister);

    // Frontend par response bhej do
    res.send(`
        <h1>🎉 Fee Successfully Submitted!</h1>
        <p>Student: ${newEntry.student}</p>
        <p>Amount: Rs. ${newEntry.amount}</p>
        <p>Type: ${newEntry.type}</p>
        <br>
        <a href="/">Wapas Form par jao</a>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
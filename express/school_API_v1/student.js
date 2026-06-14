const express = require('express');
const app = express();

// Middleware: Iske bina Express ko POST request ka JSON data samajh nahi aayega!
app.use(express.json());

// Yeh hai hamari "In-Memory" Database (Simple Array)
let students = [
    { id: 1, name: "Rahul Kumar", class: "10th", rollNo: 101 },
    { id: 2, name: "Amit Singh", class: "10th", rollNo: 102 }
];
app.post('/api/students', (req, res) => {
    const { name, class: studentClass, rollNo } = req.body;

    // Basic Validation (Interview me impact daalegi)
    if (!name || !studentClass || !rollNo) {
        return res.status(400).json({ success: false, message: "Bhai, saari fields daalna zaroori hai!" });
    }

    // Naya object banaya aur unique ID dedi (Array ki length + 1 ya Date.now())
    const newStudent = {
        id: students.length + 1,
        name,
        class: studentClass,
        rollNo
    };

    students.push(newStudent);
    
    // 201 status matlab = Created!
    res.status(201).json({ success: true, message: "Student successfully add ho gaya!", data: newStudent });
});

// 1. Saare students ke liye
app.get('/api/students', (req, res) => {
    res.status(200).json({ success: true, count: students.length, data: students });
});

// 2. Ek specific student ke liye (Using URL Params)
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id); // URL se ID humesha string milti hai, use number banaya
    
    // Array.find() se student dhoonda
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ success: false, message: "Oops! Is ID ka koi student nahi mila." });
    }

    res.status(200).json({ success: true, data: student });
});

app.put('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ success: false, message: "Student nahi mila, update kisko karu?" });
    }

    // Frontend se jo naya data aaya, use purane wale me update kar dia
    const { name, class: studentClass, rollNo } = req.body;

    if (name) student.name = name;
    if (studentClass) student.class = studentClass;
    if (rollNo) student.rollNo = rollNo;

    res.status(200).json({ success: true, message: "Data update ho gaya boss!", data: student });
});

app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    
    // Pehle check karo ki woh exist karta bhi hai ya nahi
    const studentExists = students.some(s => s.id === studentId);

    if (!studentExists) {
        return res.status(404).json({ success: false, message: "Jo pehle se nahi hai use kya delete karu!" });
    }

    // Filter lagakar us ID wale student ko chhod kar baki sabko rakh liya
    students = students.filter(s => s.id !== studentId);

    res.status(200).json({ success: true, message: "Student ka patta saaf! Delete ho gaya." });
});

// Server running point
app.listen(3000, () => console.log("Server chal pada port 3000 par!"));
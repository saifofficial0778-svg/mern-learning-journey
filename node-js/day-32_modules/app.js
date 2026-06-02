const fs = require('fs');

console.log("1. Subah School ka gate khula (Start)");

// Sahi path aur poora callback function
fs.readFile('student_data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Oho! File padhne me galti ho gai:", err.message);
        return;
    }
    console.log("3. Principal Sir ki file ka data aa gya :", data);
});

console.log("2. Baaki bache apna attendance laga rahe hain (End)");

// File Write Karne Ka Async Tarika (fs.writeFile)


const logData = "Student Rahul marked Present at 10:45 AM\n";

// Async tareeqe se file me data likhna
fs.writeFile('attendance_logs.txt', logData, (err) => {
    if (err) {
        console.log("Log likhne me dikkat aayi:", err);
        return;
    }
    console.log("Log successfully save ho gaya background me!");
});

console.log("Mai pehle chalunga, file write hoti rahegi aaram se!");
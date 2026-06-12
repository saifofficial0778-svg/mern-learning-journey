const express = require('express');
const app = express();

// 1. Routes ko import kiya
const studentRoutes = require('./routes/studentRoutes');

// 2. Middleware: Iske bina Thunder Client ka JSON body backend nahi padh payega
app.use(express.json());

// 3. Base Route Configuration
// Jab bhi URL me '/student' aayega, yeh request ko studentRoutes ki file me bhej dega
app.use('/api/v1/student', studentRoutes);

// 4. Global Error Handling (Optional par interview ke liye bht badhiya hai)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Kuch phat gaya bhai backend par!');
});

// 5. Server Port Set Kiya
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server ekdum mast daud raha hai port ${PORT} par! 🚀  `);
    console.log("Server running on port 5000:http://localhost:5000")
});
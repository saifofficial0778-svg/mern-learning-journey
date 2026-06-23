const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Middleware: Taaki hamara express server JSON data samajh paye
app.use(express.json());

// Maan lo yeh hamara nakli Database hai (Array)
const schoolDatabase = [];

// POST API: School Signup ke liye
app.post('/api/school/signup', async (req, res) => {
    try {
        // 1. Frontend se data nikala
        const { schoolName, adminEmail, password } = req.body;

        // Validation: Kuch chhuta toh nahi?
        if (!schoolName || !adminEmail || !password) {
            return res.status(400).json({ message: "Bhai, saari fields bharna compulsory hai!" });
        }

        // 2. Check karo school pehle se toh register nahi hai
        const existingSchool = schoolDatabase.find(school => school.email === adminEmail);
        if (existingSchool) {
            return res.status(400).json({ message: "Yeh Email toh pehle se registered hai, login karo!" });
        }

        // 3. Password ka Halwa banaya (Hashing with 10 salt rounds)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 4. Naya School Object banakar DB me save kiya
        const newSchool = {
            id: Date.now(),
            schoolName,
            email: adminEmail,
            password: hashedPassword // Original password nahi, HASH save kiya!
        };
        
        schoolDatabase.push(newSchool);
        console.log("DB ki current halat:", schoolDatabase);

        // 5. Success Response bheja (Ab frontend isse dekh kar redirect karega login par)
        return res.status(201).json({ 
            success: true, 
            message: "School Registered Successfully! 🎉",
            redirectTo: "/login" 
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error ho gaya bhai!" });
    }
});

app.listen(3000, () => console.log("Server chal pada port 3000 par! 🚀"));
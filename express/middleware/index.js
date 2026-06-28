// Topic 1: Middleware
const express=require('express')
const app=express();
const PORT=3000;
// const entryGateKeeper=(req,res,next)=>{
//     console.log(`[LOG]:Request aayi hai standard time par: ${new Date().toISOString()} `)
//     next();
// };
// app.use(entryGateKeeper);

// app.get('/dashboard',(req,res)=>{
//     res.send("Welcome to your ERP Dashboard!")
// });
// app.listen(3000,()=>console.log("Server running on port 3000"))

// 2. Middleware Chaining (Ek ke baad Ek)
const entryGateKeeper = (req, res, next) => {
    console.log(`[LOG 1]: Request aayi hai standard time par: ${new Date().toISOString()}`);
    next(); // Isne baton pass kiya agle middleware ko
};

// Middleware 2: Check karegi ki user logged in hai ya nahi (Auth Check)
// const authCheck = (req, res, next) => {
//     console.log("[LOG 2]: Checking if user is logged in...");
    
//     const isLoggedIn = true; // Socho abhi ke liye user logged in hai

//     if (isLoggedIn) {
//         next(); // Agar logged in hai, toh final destination (route) par bhejo
//     } else {
//         res.status(401).send("Bhai pehle login toh kar lo!"); // Chain ko yahi tod diya, next() call nahi kiya
//     }
// };

// // Dono middlewares ko chain me laga diya
// app.use(entryGateKeeper);
// app.use(authCheck);

// // Final Destination (Route Handler)
// app.get('/dashboard', (req, res) => {
//     res.send("Welcome to your ERP Dashboard!");
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Topic 3: express.json() body parser  
// app.use(express.json())
// app.post('/api/fee/submit',(req,res)=>{
//     const {studentName,amount,date}=req.body;
//     console.log(`[ERP LOG]: Fee received from ${studentName}, Amount: ₹${amount} on ${date}`)

//     res.status(201).json({
//         sucess:true,
//         message:"Fee receipt created successfully!",
//         data:{studentName,amount,date}
//     })
// })

// app.listen(PORT,()=>console.log(`Server running on port ${PORT} :http://localhost:3000//api/fee/submit`))

// Topic 4: morgan + helmet third party middlewares
const morgan = require('morgan');
const helmet = require('helmet');
// ----- Middlewares Pipeline -----
app.use(helmet());        // 1. Security Guard sabse pehle lagaya
app.use(morgan('dev'));   // 2. CCTV Camera on kiya logger ke liye
app.use(express.json());  // 3. JSON Suitcase kholne ki chaabi

app.post('/api/fee/submit', (req, res) => {
    const { studentName, amount } = req.body;
    res.status(201).json({ success: true, message: `Fee for ${studentName} recorded.` });
});
app.get('/api/fee',(req,res)=>{
    res.status(200).json({
        success:true,
        data:{"Name":"Mohd Saif","Age":23}
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT} :http:/localhost:3000//api/fee/submit`));
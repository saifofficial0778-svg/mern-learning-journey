const express=require('express')
const app=express();
const studentRoutes=require('./routes/studentRoutes')

app.use(express.json());

app.use('/student',studentRoutes);

app.listen(5000,()=>{console.log("Server running on port 5000:http://localhost:5000")})
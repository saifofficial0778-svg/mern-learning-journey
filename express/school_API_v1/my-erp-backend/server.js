const express=require('express');
const app=express();

const studentRoutes=require('./src/routes/studentRoutes');
const feeRoutes=require('./src/routes/feeRoutes');

app.use(express.json());

app.use('/api/student',studentRoutes);
app.use('/api/fee',feeRoutes);

const PORT=3000;

app.listen(PORT,()=>console.log(`ERP Backend MVC Server running on port ${PORT}`))
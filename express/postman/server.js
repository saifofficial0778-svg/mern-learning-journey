const express=require('express')
const app=express();

app.use(express.json());

app.get('/api/welcome',(req,res)=>{
    res.json({message:"Welcome to your ERP System, Bro!"})
})

app.post('/api/users',(req,res)=>{
    const{name,role}=req.body;
    res.status(201).json({
        success: true, 
        message: `User ${name} as ${role} created successfully!`
    })
})

app.put('/api/users/:id',(req,res)=>{
    const userId=req.params.id
    const{name,role}=req.body;
    res.json({
     success: true,
        message: `User ID ${userId} completely updated to Name: ${name}, Role: ${role}`
       
    })
})
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    
    res.json({
        success: true,
        message: `User ID ${userId} has been deleted from ERP.`
    });
});

app.listen(3000,()=>console.log('Server running on port 3000'))
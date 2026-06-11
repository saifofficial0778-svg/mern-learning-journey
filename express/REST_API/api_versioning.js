const express=require('express')
const app=express();
app.use(express.json());

// ==========================================
// VERSION 1: Purana Code (Sabka Chahita)
// ==========================================
const v1Router=express.Router();

v1Router.get('/fees',(req,res)=>{
    res.json({
        version:"v1",
        data:[
            {id:1,studentName:"Rahul Name",amount:5000,}
        ]
    })
})

// ==========================================
// VERSION 2: Naya Code (Aaya Naya Twist!)
// ==========================================

const v2Router=express.Router();
v2Router.get('/fees',(req,res)=>{
    res.json({
        success:"v2",
        data:[
            {id:1,firstName:"Rahul",lastName:"kumar",amount:5000}
        ]
    })
})
// ==========================================
// Dono Routers ko App mein jodna (Main Magic)
// ==========================================
app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);

app.listen(3000,()=>console.log("Server running on port 3000:http://localhost:3000"))
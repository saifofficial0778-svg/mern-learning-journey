// 1. Apni express app ko import karo jo humne app.js me banayi thi
const app = require('./app3');

// 2. Environment variable set karo (Dev mode me chalane ke liye)
process.env.NODE_ENV = 'development'; 

// 3. Yahan par lagao app.listen 🚀
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 ERP Server ekdum mast chal raha hai on port ${PORT}...`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});
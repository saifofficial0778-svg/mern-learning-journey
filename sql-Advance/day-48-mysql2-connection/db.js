const mysql=require('mysql2/promise')
const pool=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "xyz", // Tumhara sahi wala password
    database: "edusuite_db",


   // 🔥 Pool ki super-powers (Interview me puchne wale settings):
    waitForConnections: true,  // Agar saari cabs busy hain, toh naye user ko line me khada rakho (wait karwao)
    connectionLimit: 10,       // Ek baar me maximum 10 connections hi khulenge
    queueLimit: 0              // Line me kitne bhi log khade ho sakte hain (0 matlab unlimited)
})

async function testPool() {
    try{
        const[rows]=await pool.query("SELECT 1+1  AS result")
        console.log("🚀 Pool ekdum mast chal raha hai! Result:", rows[0].result)
    }catch (error) {
        console.error("❌ Pool me dikkat hai bhai:", error.message);
    }
}
testPool();
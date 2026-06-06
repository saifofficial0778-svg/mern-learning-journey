require('dotenv').config()

const port = process.env.PORT
const dbPss=process.env.DB_PASSWORD

console.log(`Server running on port: ${port}`); 
// Output: Server running on port: 5000

console.log(`Database Password loaded successfully!`);
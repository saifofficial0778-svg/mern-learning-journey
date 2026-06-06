require('dotenv').config();

// 1. process.env se values nikalna
const currentEnv = process.env.NODE_ENV; 

// 2. Fallback (Backup) system banana - Interview Fav!
// Agar kisi wajah se .env me PORT nahi mila, toh backup me 8000 use kar lo
const PORT = process.env.PORT || 8000; 

console.log(`App abhi [${currentEnv}] mode me chal raha hai.`);

// 3. Environment ke hisab se logic chalana (ERP me kaam aayega)
if (process.env.NODE_ENV === 'development') {
    console.log("Database: Connecting to LOCAL testing database...");
} else if (process.env.NODE_ENV === 'production') {
    console.log("Database: Connecting to LIVE secure database...");
}

console.log(`Server is listening on port: ${PORT}`);
// Node.js ka built-in module 'os' (Operating System) hum import kar rahe hain
// Yeh kaam hum browser wale JS me nahi kar sakte security ki wajah se!
const os = require('os');

console.log("--- System Information via Node.js ---");

// Aapke laptop ka architecture (e.g., x64)
console.log(`Architecture: ${os.arch()}`);

// Aapke operating system ka platform (e.g., win32, linux)
console.log(`Platform: ${os.platform()}`);

// Laptop me kitni free memory (RAM) bachi hai (in Bytes)
const freeMemory = os.freemem();
console.log(`Free Memory: ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);

function checkEnvironment() {
    if (typeof window !== 'undefined') {
        console.log(" Bhai, hum Browser ke andar hain! Window object mil gaya.");
    } else if (typeof global !== 'undefined') {
        console.log(" Bhai, hum Node.js ke andar hain! Server mast chal raha hai.");
    }
}

checkEnvironment();

// Final Code jo Interviewer ko dikhana hai:
const num1 = Number(process.argv[2]); // "10" ban gaya 10
const num2 = Number(process.argv[3]); // "20" ban gaya 20

const sum = num1 + num2;
console.log("Dono ka total sum hai:", sum); // Output: 30
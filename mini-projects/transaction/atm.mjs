import { EventEmitter } from 'events';
import fs from 'fs';
import path from 'path';

const logPath = path.join(process.cwd(), 'transactions.json');

// 1. ATM Class banayein jo EventEmitter ki powers use karegi
class ATM extends EventEmitter {
    constructor(initialBalance) {
        super(); // Parent (EventEmitter) ke constructor ko call kiya
        this.balance = initialBalance;
    }

    // Paise jama karne ka function
    deposit(amount) {
        this.balance += amount;
        console.log(`💰 Deposited: ₹${amount} | Current Balance: ₹${this.balance}`);
        
        // ---- AAPKO CODE LIKHNA HAI ----
       this.emit('transaction','DEPOSITE',amount);
        
    }

    // Paise nikalne ka function
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("❌ Insufficient balance! Paise nahi hain bhai.");
            return;
        }
        this.balance -= amount;
        console.log(`💸 Withdrawn: ₹${amount} | Current Balance: ₹${this.balance}`);
        
        // ---- AAPKO CODE LIKHNA HAI ----
       
        this.emit('transaction','WITHDRAW',amount);
    }
}

// 2. ATM ka ek object (instance) banao ₹10,000 balance ke sath
const myAtm = new ATM(10000);

// 3. Background Listener (Security Guard) jo har transaction par nazar rakhega
myAtm.on('transaction', (type, amount) => {
    const logData = {
        time: new Date().toLocaleString(),
        type: type,
        amount: amount,
        currentBalance: myAtm.balance
    };

    // Puraane transactions read karo (Khaali array agar file na ho)
    let history = [];
    if (fs.existsSync(logPath)) {
        history = JSON.parse(fs.readFileSync(logPath, 'utf-8'));
    }

    // Nayi transaction history me jodo
    history.push(logData);

    // ---- AAPKO CODE LIKHNA HAI ----
    fs.writeFileSync(logPath,JSON.stringify(history,null,2))
    console.log("📝 Transaction history updated in JSON!");
});

// --- Test Area: Bank chalu karo ---
myAtm.deposit(500);  // ₹5000 jama kiye
myAtm.deposit(500);  // ₹5000 jama kiye
// myAtm.withdraw(2000); // ₹2000 nikale
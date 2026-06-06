import os from 'os';
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'health-alerts.txt');

console.log("🚀 System Health Monitor Started... Press Ctrl+C to Stop.");

// Har 5 second me system status check karne ke liye setInterval lagaya
setInterval(() => {
    // 1. OS module se data nikalna hai
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const cpuCores = os.cpus().length;

    // Bytes ko GB me convert karo
    const totalGB = (totalMem / (1024 * 1024 * 1024)).toFixed(2);
    const freeGB = (freeMem / (1024 * 1024 * 1024)).toFixed(2);

    // 2. Used RAM Percentage nikalne ka logic
    const usedPercent = ((totalMem - freeMem) / totalMem) * 100;

    // Live status terminal me dikhao
    console.log(`\n--- System Check [${new Date().toLocaleTimeString()}] ---`);
    console.log(`CPU Cores: ${cpuCores}`);
    console.log(`Total RAM: ${totalGB} GB | Free RAM: ${freeGB} GB`);
    console.log(`RAM Usage: ${usedPercent.toFixed(2)}%`);

     const logMessage=`[${new Date().toLocaleString()}] CORES: ${cpuCores} | TOTAL: ${totalGB}GB | FREE: ${freeGB}GB | USAGE: ${usedPercent.toFixed(2)}%\n`;

    fs.appendFileSync(logFilePath, logMessage);



}, 5000); // 5000 milliseconds = 5 seconds
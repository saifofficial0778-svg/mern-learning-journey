// logger.js
import { EventEmitter } from 'events';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname fallback for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, 'logs.txt');
const taskEmitter = new EventEmitter();

// Event Listener: Jab bhi koi task update hoga, ye run karega
taskEmitter.on('taskAction', (action, taskName) => {
    const logMessage = `[${new Date().toISOString()}] ACTION: ${action} | TASK: ${taskName}\n`;
    
    // fs.appendFile automatically creates file if it doesn't exist
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) console.error("Failed to write log:", err);
    });
});

export default taskEmitter;
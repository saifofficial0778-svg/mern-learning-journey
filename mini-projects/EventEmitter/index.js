// index.js
import fs from 'fs';
import path from 'path';
import taskEmitter from './logger.js';

const tasksFile = path.join(process.cwd(), 'tasks.json');

// Helper function to read tasks
const getTasks = () => {
    if (!fs.existsSync(tasksFile)) return [];
    const data = fs.readFileSync(tasksFile, 'utf-8');
    return JSON.parse(data || '[]');
};

// Helper function to save tasks
const saveTasks = (tasks) => {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// CLI Arguments input lena (global process object)
const [, , command, argument] = process.argv;

if (command === 'add') {
    if (!argument) {
        console.log("Please provide a task name! Example: node index.js add 'Learn Node'");
        process.exit(1);
    }
    const tasks = getTasks();
    tasks.push({ id: Date.now(), title: argument, status: 'pending' });
    saveTasks(tasks);
    
    console.log(`🚀 Task Added: "${argument}"`);
    // Event emit ho raha hai yahan
    taskEmitter.emit('taskAction', 'ADD_TASK', argument);

} else if (command === 'list') {
    const tasks = getTasks();
    console.log("\n--- YOUR TASK LIST ---");
    if (tasks.length === 0) console.log("No tasks found.");
    tasks.forEach((t, i) => console.log(`${i + 1}. ${t.title} [${t.status}]`));
    console.log("----------------------\n");

} else {
    console.log("Available commands: add <task_name> | list");
}
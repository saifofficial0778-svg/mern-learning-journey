class SchoolStore {
    constructor() {
        this.users = []; // Yeh hai aapka fake database
    }

    // Student add karne ka function
    addStudent(studentInstance) {
        this.users.push(studentInstance);
        console.log(`Success: ${studentInstance.name} added!`);
    }

    // Student find karne ka function
    findStudentById(id) {
        const student = this.users.find(user => user.id === id && user.role === 'Student');
        return student ? student : "Student not found!";
    }
}
// Agar aapko User.js ki zarurat controller me hai (Optional abhi ke liye)
// const { Student } = require('../models/User'); 

// Class ke khatam hone ke baad neeche export karo
module.exports = SchoolStore;
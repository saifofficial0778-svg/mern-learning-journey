class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    // Yeh generic method hoga jise bache override karenge
    getDashboard() {
        return `Welcome to your dashboard, ${this.name}`;
    }
}
class Student extends User {
    constructor(id, name, grade) {
        super(id, name, 'Student'); // Parent constructor ko call kiya
        this.grade = grade;
    }

    getDashboard() {
        return `[Student Dashboard] Name: ${this.name}, Grade: ${this.grade}, Tasks: View Attendance, View Grades.`;
    }
}

class Teacher extends User {
    constructor(id, name, subject) {
        super(id, name, 'Teacher');
        this.subject = subject;
    }

    getDashboard() {
        return `[Teacher Dashboard] Welcome Prof. ${this.name}. Classes today: Physics, Math.`;
    }
}

// Same aese hi Admin class banegi...
class Admin extends User {
    constructor(id, name) {
        super(id, name,'Admin');
      
    }

    getDashboard() {
        return `[Admin Dashboard] Welcome Admin ${this.name}.`;
    }
}
// Taaki baaki files in classes ko use kar sakein
module.exports = { User, Student, Teacher, Admin };
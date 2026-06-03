// --- 1. Base / Parent Class ---
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`🔑 [LOGIN SUCCESS]: ${this.name} (${this.email}) ne portal khol liya.`);
    }
}

// --- 2. Child Class 1: Student ---
class Student extends User {
    constructor(name, email, rollNo, branch) {
        super(name, email); // Baap ka constructor call kiya
        this.rollNo = rollNo;
        this.branch = branch;
    }

    viewAttendance() {
        console.log(`📋 Student ${this.name} apni attendance dekh raha hai... (75% se kam h, padh le bhai!)`);
    }
}

// --- 3. Child Class 2: Teacher ---
class Teacher extends User {
    constructor(name, email, subject, salary) {
        super(name, email); // Baap ka constructor call kiya
        this.subject = subject;
        this.salary = salary;
    }

    markAttendance() {
        console.log(`✍️ Professor ${this.name} ne ${this.subject} ki class me sabki proxy pakad li!`);
    }
}

// --- 4. Child Class 3: Admin ---
class Admin extends User {
    constructor(name, email, adminLevel) {
        super(name, email); // Baap ka constructor call kiya
        this.adminLevel = adminLevel;
    }

    // Admin ke paas ek special power hai: Kisi ko bhi block karna
    blockUser(userObj) {
        console.log(`🚫 [ADMIN ACTION]: Admin ${this.name} ne ${userObj.name} ko block kar diya! 🤯`);
    }
}

// --- CHALO INKI TESTING KARTE HAIN ---

const shyam = new Student("Shyam", "shyam@college.com", 21, "CS");
const profSharma = new Teacher("Dr. Sharma", "sharma@college.com", "OOPs in JS", 90000);
const systemAdmin = new Admin("Rajesh Kumar", "admin@college.com", "SuperAdmin");

// Dekho, teeno ke paas login() method apne aap aa gaya!
shyam.login();        // Shyam ne login kiya
profSharma.login();   // Professor ne login kiya
systemAdmin.login();  // Admin ne login kiya

console.log("-----------------------------------------");

// Ab sab apni apni special taakat use karenge:
shyam.viewAttendance();
profSharma.markAttendance();

// Admin chahe toh student ko block kar sakta hai:
systemAdmin.blockUser(shyam);
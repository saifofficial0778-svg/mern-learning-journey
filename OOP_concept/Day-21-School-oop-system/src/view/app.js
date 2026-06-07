// Files ko aapas me connect karne ke liye require use karo
const { Student } = require('../models/User');
const SchoolStore = require('../controllers/StudentController');

// Ab iske neeche aapka baaki saara code (const store = new SchoolStore()...) chalega!
// 1. Pehle classes ke instances (objects) banao
const store = new SchoolStore();

// Yahan hum fake students create kar rahe hain
// (Maun ke chalte hain aapne Student class me id, name, grade/role pass kiya hai)
const student1 = new Student(101, "Rahul Kumar", "10th");
const student2 = new Student(102, "Amit Sharma", "12th");

console.log("--- TESTING ADD STUDENT ---");
// 2. Students ko fake DB (array) me add karo
store.addStudent(student1);
store.addStudent(student2);

console.log("\n--- TESTING FIND STUDENT ---");
// 3. Kisi student ko ID se dhoondo
const foundStudent = store.findStudentById(101);
console.log("Found:", foundStudent);

// 4. Us student ka dashboard print karo (Polymorphism check karne ke liye)
if (typeof foundStudent !== "string") {
    console.log(foundStudent.getDashboard());
}

console.log("\n--- TESTING NOT FOUND CASE ---");
// 5. Ek aesi ID dhoondo jo exist hi nahi karti
const missingStudent = store.findStudentById(999);
console.log("Result:", missingStudent);
// Topic 1: Inheritance & extends Keyword (Desi Style)
// 1. Parent Class: Yeh basic template hai sabke liye
class User {
    constructor(username) {
        this.name = username;
    }

    // Ek simple method
    login() {
        console.log(`${this.name} ne system me tamashey ke sath login kiya! 😎`);
    }
}

// 2. Child Class: Student jo User ki saari khoobiyan churayega
// Yahan humne use kiya 'extends'
class Student extends User {
    // Abhi ke liye iske andar kuch nahi likhte, khali chodte hain
    bunkClass() {
        console.log(`${this.name} aaj class bunk karke chai peene gaya hai. ☕`);
    }
}

// --- Ab isko chala ke dekhte hain ---

const student1 = new Student("Rahul");

// Rahul ne login() method Student class me nahi banaya tha, 
// fir bhi woh ise use kar sakta hai kyunki uske baap (User) ke paas yeh tha!
student1.login(); // Output: Rahul ne system me tamashey ke sath login kiya! 😎

// Student ka apna khudka naya method
student1.bunkClass(); // Output: Rahul aaj class bunk karke chai peene gaya hai. ☕

// Topic 2: super() Keyword & Parent Constructor Call
class User {
    constructor(username) {
        this.name = username; // Baap ne apna kaam kiya
    }
    
    showDetails() {
        console.log(`Naam: ${this.name}`);
    }
}

class Student extends User {
    constructor(username, rollNo) {
        // 1. Sabse pehle super() call hona chahiye, isse pehle 'this' use nahi kar sakte!
        super(username); // Yeh 'username' ko seedha upar User ke constructor me bhej dega
        
        // 2. Ab baap ka kaam ho gaya, ab beta apna kaam karega
        this.roll = rollNo; 
    }

    // Student ka apna method jo baap ki property (this.name) bhi use kar sakta hai
    showStudent() {
        console.log(`Student Name: ${this.name}, Roll No: ${this.roll}`);
    }
}

// --- Test Karte Hain ---
const student2 = new Student("Vikas", 45);
student2.showStudent(); // Output: Student Name: Vikas, Roll No: 45
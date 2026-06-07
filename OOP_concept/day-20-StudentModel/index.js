class StudentModel {
    #name;
    #rollNo;
    #fees;
    #marks;

    constructor(name, rollNo, fees, marks) {
        this.#name = name;
        this.#rollNo = rollNo;
        this.#fees = fees;
        this.#marks = marks;
    }
    get name() { return this.#name; }
    get rollNo() { return this.#rollNo; }
    get fees() { return this.#fees; }
    get marks() { return this.#marks; }

    set marks(newMarks) {
        if (newMarks >= 0 && newMarks <= 100) {
            this.#marks = newMarks;
        } else {
            console.error("Invalid marks! Marks 0 se 100 ke beech hone chahiye.");
        }
    }

    set fees(paidAmount) {
        if (paidAmount >= 0) {
            this.#fees = paidAmount;
        } else {
            console.error("Fees negative nahi ho sakti!");
        }
    }

}


class StudentController{
    constructor(){
        this.studentList=[];
    }

    addStudent(name,rollNo,fees,marks){
        const existing=this.findStudent(rollNo);
        if(existing){
            console.log(`Error: Roll No ${rollNo} ka student pehle se exists karta hai!`);
            return
        }
        const newStudent=new StudentModel(name,rollNo,fees,marks);
        this.studentList.push(newStudent);
        console.log(`Success: ${name} ka data system me ADD ho gaya.`)
    }

    findStudent(rollNo){
        const student=this.studentList.find(s=>s.rollNo===rollNo)
        if(student){
            return student;
        }else{
            return null;
        }
    }

    updateStudentData(rollNo,newMarks, newFees){
        const student =this.findStudent(rollNo);
        if(!student){
            console.error(`Error: Roll No ${rollNo} ka koi student nahi mila! Update fail.`);
            return;
        }
        if (newMarks!==undefined) student.marks=newMarks;
        if(newFees !==undefined) student.fees=newFees;
        console.log(`Success: Roll No ${rollNo} ka data UPDATE ho gaya.`);
    }
}

class StudentView {
    // printInfo method: Ye kisi bhi student ka object lega aur uski details print karega
    printInfo(student) {
        if (!student) {
            console.log("❌ View Error: Dikhane ke liye koi student data nahi mila!");
            return;
        }

        // Mast formatting ke sath console par report card print karte hain
        console.log("\n====================================");
        console.log(`🎓 --- STUDENT REPORT CARD --- 🎓`);
        console.log("====================================");
        console.log(`| Name     : ${student.name}`);
        console.log(`| Roll No  : ${student.rollNo}`);
        console.log(`| Fees Paid: ₹${student.fees}`);
        console.log(`| Marks    : ${student.marks}%`);
        console.log("====================================\n");
    }
}

const erpController = new StudentController();
const erpView = new StudentView();

console.log("🚀 --- ERP SYSTEM INITIALIZED --- 🚀");

// Step 2: Kuch students ko ADD karte hain Controller ke through
erpController.addStudent("Rahul Kumar", 101, 45000, 85);
erpController.addStudent("Priya Sharma", 102, 50000, 92);

erpController.addStudent("Duplicate Rahul", 101, 20000, 50);
console.log("\n--- Testing FIND and VIEW ---")

const studentData = erpController.findStudent(101)
erpView.printInfo(studentData)

console.log("--- Testing UPDATE and VIEW ---");
erpController.updateStudentData(101,95,48000);

const updateStudentData=erpController.findStudent(101);

erpView.printInfo(updateStudentData)
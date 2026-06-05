class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getDashboard(){
        return `Welcome ${this.name}! generic user dashboard loading...`;
    }
}

class Student extends User{
    constructor(name,email,marks,attendance){
        super(name,email);
        this.marks=marks;
        this.attendance=attendance;
    }
    getDashboard(){
        return{
            message:`Welcome Student: ${this.name}`,
            marks:this.marks,
            attendance:`${this.attendance}%`
        }
    }
}
class Teacher extends User {
    constructor(name, email, classes, timetable) {
        super(name, email);
        this.classes = classes;
        this.timetable = timetable;
    }

    // METHOD OVERRIDING: Yahan bhi parent ka method override ho gaya apna alag roop lene ke liye
    getDashboard() {
        return {
            message: `Welcome Teacher: ${this.name}`,
            assignedClasses: this.classes,
            todayTimetable: this.timetable
        };
    }
}

const student1= new Student('saif','saif@gmail.com',{ Math: 85, Science: 90 }, 88);
const teacher1=new Teacher('Ankur','ankur@gmail.com',["Class 10-A", "Class 12-B"], ["09:00 AM", "11:30 AM"])

console.log(student1.getDashboard())
console.log(teacher1.getDashboard())

console.log(student1 instanceof Student);

function uploadMarks(user){
    if(user instanceof Teacher){
       console.log("Access Granted! Marks upload ho rahe hain..."); 
    }else{
        console.log("Access Denied! Tum teacher nahi ho beta, back to classroom.");
    }
}
uploadMarks(student1);
uploadMarks(teacher1);

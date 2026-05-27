// Topic 1: Prototypes & Prototype Chain 🔗
const parent={
    surname:"Sharma",
    car:"Safari",
    sayHello:function(){
        console.log("Good Morning! beta");
    }
};

const child={
    name:"Rahul",
    bike:"Splendor"
};

Object.setPrototypeOf(child,parent);

console.log(child.name)
console.log(child.bike)
console.log(child.car)

// Topic 2: __proto__ vs prototype property
function CarFactory(color){
    this.color=color;
}1

CarFactory.prototype.startAC=function(){
    console.log("AC is cooling now...");
}

const myCar=new CarFactory("Red");

console.log(myCar)
myCar.startAC();

console.log(myCar.__proto__===CarFactory.prototype);

// Topic 3: Object.create() 🏗️

const teacherRules={
    takeAttendence:function(){console.log("Attendence marked for today")},
    givenMarks:function(){console.log("Marks uploaded to ERP")}
};

const principalRules=Object.create(teacherRules);

principalRules.suspendStudent= function(){
    console.log("Student suspend from the school");
}

const amitPrincipal=Object.create(principalRules);

amitPrincipal.name= "Mr. Amit Sharma";

amitPrincipal.takeAttendence();
amitPrincipal.suspendStudent();
console.log(amitPrincipal.name);

// Topic 4: Prototype Inheritance Manually 🏎️

// 1. MAIN BRANCH (Yeh batata hai ki main branch me kya setup hota hai)
function MainHaldiram(managerName){
    this.brand="Haldiram";
    this.manager=managerName;
}
// Main branch ke paas ek secret recipe hai
MainHaldiram.prototype.makeBhujia=function(){
    console.log("Secret Aloo Bhujia is Ready!");
}

// 2. TUMHARI NAYI FRANCHISE DUKAN
function NewShop(managerName,staffCount){
    MainHaldiram.call(this,managerName);
    this.staffCount=staffCount;
}

NewShop.prototype=Object.create(MainHaldiram.prototype); 
NewShop.prototype.constructor = NewShop;

const myShop = new NewShop("Saif",50);

console.log(myShop.brand)
myShop.makeBhujia();

// Topic 5: hasOwnProperty() 🛑
// 1. Ek common prototype banaya school ke rules ka
const schoolRules = {
    schoolName: "Delhi Public School"
};

// 2. Ek student ka object banaya jiska prototype schoolRules hai
const student = Object.create(schoolRules);
student.name = "Aarav"; // Yeh student ki apni property hai
student.rollNo = 101;   // Yeh bhi student ki apni hai

// --- Testing hasOwnProperty ---

// Sawaal 1: Aarav, kya 'name' teri khud ki property hai?
console.log(student.hasOwnProperty('name')); 
// Output: true ✅ (Kyunki 'name' uske object ke andar khud likha hai)

// Sawaal 2: Aarav, kya 'schoolName' teri khud ki property hai?
console.log(student.hasOwnProperty('schoolName')); 
// Output: false ❌ (Kyunki student ke paas schoolName khud ka nahi hai, wo prototype se access kar raha hai)

// Sawaal 3: Kya hum 'schoolName' ko print kar sakte hain?
console.log(student.schoolName); 
// Output: Delhi Public School (Print toh hoga, kyunki chain me gadi mil rahi hai, par hasOwnProperty hamesha false dega)
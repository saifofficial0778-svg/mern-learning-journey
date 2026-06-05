// ==========================================
// 1. MODEL (Sirf Data aur Logic)
// ==========================================
class StudentModel{
    constructor(name,marks){
        this.name=name;
        this.marks=marks
    }
    getGrade(){
        return this.marks>=40?'pass':'Fail';
    }
}
// ==========================================
// 2. VIEW (Sirf UI/Display ka kaam)
// ==========================================
class StudentView{
    renderDetails(studentName,grade){
        console.log(`--- Student Report Card ---`)
        console.log(`Name: ${studentName}`)
        console.log(`Status: ${grade}`)
        console.log(`--------------------------------`)
    }
}

// ==========================================
// 3. CONTROLLER (Dono ko connect karne wala)
// ==========================================
class StudentController{
    constructor(model,view){
        this.model=model;
        this.view=view;
    }
    updateView(){
        const name=this.model.name;
        const grade=this.model.getGrade();

        this.view.renderDetails(name,grade);
    }
}
// ==========================================
// EXECUTION (Poore System ko chalana)
// ==========================================

const studentData=new StudentModel('Rahul',85)
const studentUI=new StudentView();

const app=new StudentController(studentData,studentUI);

app.updateView()

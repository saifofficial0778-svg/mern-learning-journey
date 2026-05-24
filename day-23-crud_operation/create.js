const studentTable=[];

function addStudent(name,className){
    const nextId=studentTable.length>0?studentTable[studentTable.length-1].id+1:1;

    const newStudent ={id:nextId,name:name,class:className};
    studentTable.push(newStudent);
}

addStudent("Mohd_Saif","10th-A");
addStudent("Musak khan","9th-A");
addStudent("suzuka","5th-A");
addStudent("amir khan","7th-A");

console.log(studentTable);

const filteredStudent = studentTable.filter(student=>{
    return student.class==="10th-A" && student.name.startsWith('M');
})

console.log(filteredStudent);

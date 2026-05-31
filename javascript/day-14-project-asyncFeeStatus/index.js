let students=[{
    id:101,
    name:"Saif",
    feePaid:true
},
{
    id:102,
    name:"Azeem",
    feePaid:false
},
{
    id:103,
    name:"Arbaz",
    feePaid:false
},
{
    id:104,
    name:"hashim",
    feePaid:true
}
];

function getStudentFromDB(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let student=students.find(stud=>stud.id===id);
            if(student){
                resolve(student);
            }
            else{
                reject("Student nhi mila bhai");
            }
        },2000)
    })
}

async function checkFeeStatus(id){
    console.log("Loading student data... Please wait...");
    try{
        let response = await getStudentFromDB(id);
        
        if(response.feePaid===true){
            console.log(`${response.name} has paid the fee.`);
        }
        else{
            console.log(`sir abhi ${response.name} student ki fee pending hai`)
        }
    }catch(error){
        console.log("⚠️ Error:", error);
    }
    
}
checkFeeStatus(103);
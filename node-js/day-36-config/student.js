function getStudentFromDB(studentId){
    if(studentId==='unknown'){
        throw new Error("Student Databse me nahi mila!")
    }
    return {id:studentId,name:"Rahul Sharma",feesPending:true}
}

function handleFeeStatus(studentId){
    try{
        console.log("Try block shuru hua... Student ka data nikal rahe hain.");

        const student=getStudentFromDB(studentId);

        console.log(`Success! Student name: ${student.name}`);
        console.log(`Fees Paid Status: ${student.feesPending ? "Pending" : "Paid"}`);
    }catch(error){
        console.log('--- ERROR CATCH HO GAYA ---')
        console.error(error.message);
    }finally{
        console.log("Finally Block: Yeh toh chalega hi chalega, database connection close!");
    }
}

console.log("--- RUNNING CASE 1 ---");
handleFeeStatus(101);

console.log("--- RUNNING CASE 2 ---");

handleFeeStatus('unknown')


const employees = ["Saif", "Amit", "Sajid", "Rahul", "Salman"];
const searchKeyword = "r"; // Yeh kuch bhi ho sakta hai: "sa", "SA", "sA"

const filterdEmployees=employees.filter((name)=>{
    const lowerCaseName=name.toLocaleLowerCase()
    const lowerCaseKeyword=searchKeyword.toLocaleLowerCase();
    return lowerCaseName.includes(lowerCaseKeyword)
})
console.log(filterdEmployees)
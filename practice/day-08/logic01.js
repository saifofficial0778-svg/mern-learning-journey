// Day 8: Logic 1 — Object Filtering & Re-mapping (The "Active Users Dashboard" Pattern)
const userDatabase = [
    { id: "u1", firstName: "Saif", lastName: "Khan", isActive: true },
    { id: "u2", firstName: "Amit", lastName: "Sharma", isActive: false }, // 🚨 Inactive!
    { id: "u3", firstName: "Rahul", lastName: "Verma", isActive: true }
];

const filterUser=userDatabase.filter(user=>user.isActive===true)
// console.log(filterUser)
const newArr=filterUser.map((user)=>{
    return{
        id:user.id,
        fullName:`${user.firstName} ${user.lastName}`
    }
})
console.log(newArr)
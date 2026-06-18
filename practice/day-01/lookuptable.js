const users = [
    { id: "u1", name: "Saif", role: "Admin" },
    { id: "u2", name: "Amit", role: "User" },
    { id: "u3", name: "Rahul", role: "Moderator" }
];

const groupedData=users.reduce((gullak,product)=>{
    gullak[product.id]=product
    return gullak
    
},{})
// console.log(JSON.stringify(groupedData,null,2))
console.log(groupedData)
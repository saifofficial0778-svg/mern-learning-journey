// Pattern 1: Group By Logic (Data Restructuring)

const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", stock: 5 },
    { id: 2, name: "Shirt", category: "Clothing", stock: 12 },
    { id: 3, name: "Phone", category: "Electronics", stock: 8 },
    { id: 4, name: "Jeans", category: "Clothing", stock: 3 }
];

const dataShow=inventory.reduce((acc,curr)=>{
    const cat=curr.category;
    if(!acc[cat]){
        acc[cat]=[]
    }
    acc[cat].push(curr)
    return acc
},{})
console.log(dataShow)

// Lookup Table / Indexing (O(1) Search)
const users = [
    { id: "u1", name: "Saif", role: "Admin" },
    { id: "u2", name: "Amit", role: "User" },
    { id: "u3", name: "Rahul", role: "Moderator" }
];

const Lookup=users.reduce((acc,curr)=>{
    acc[curr.id]=curr
    return acc
},{})
console.log(Lookup)

// Industry Pattern 3: Dynamic Data Merging (API Payload Pattern)
const localUsers = [
    { id: "u1", name: "Saif", status: "pending" },
    { id: "u2", name: "Amit", status: "pending" }
];
const apiUpdates = [
    { id: "u1", status: "verified" },
    { id: "u2", status: "rejected" }
];

const mapUser=apiUpdates.reduce((acc,curr)=>{
    acc[curr.id]=curr
    return acc
},{})
// console.log(mapUser)

const finalUser=localUsers.map((user)=>{
    if(mapUser[user.id]){
        return{
            ...user,
            status:mapUser[user.id].status
        }
    }
})
console.log(finalUser)
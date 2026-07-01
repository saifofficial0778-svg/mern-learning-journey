// // Day 7: Logic 1 — Find Duplicates in an Array (The "Memory Tracker" Pattern)
// const emails = ["saif@test.com", "amit@test.com", "saif@test.com", "rahul@test.com", "amit@test.com"];

// const seen={}

// const duplicateEmail=emails.filter((email)=>{
//     if(!seen[email]){
//         seen[email]=true

//         return false
//     }else{
//         return true
//     }
// })
// console.log(duplicateEmail)

// // Logic 2 — Remove Duplicates from Array of Objects
// const users = [
//     { id: 101, name: "Saif" },
//     { id: 102, name: "Amit" },
//     { id: 101, name: "Saif UI" }, // 🚨 Duplicate ID! (101 pehle aa chuka hai)
//     { id: 103, name: "Rahul" }
// ];

// const seen={}
// const uniqueUser=users.filter((user)=>{
//     if(!seen[user.id]){
//         seen[user.id]=true

//         return true
//     }else{
//         return false
//     }
// })
// console.log(uniqueUser)

// Logic 3 —Flatten an Array of Arrays (The "Data Smoother" Pattern)

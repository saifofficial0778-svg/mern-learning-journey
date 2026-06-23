// // Logic 1 — Array Occurrences Counter (Inventory / Frequency Mapping Pattern)
// const cartItems = ["iPhone", "AirPods", "iPhone", "MacBook", "AirPods", "iPhone"];
// const totalItem=cartItems.reduce((acc,curr)=>{
//     if(!acc[curr]){
//         acc[curr]=0
//     }
//     acc[curr]++
//     return acc
// },{})
// console.log(totalItem)

// // Logic 2 — Case-Insensitive Array Search (The Search Bar Pattern)
// const employees = ["Saif", "Amit", "Sajid", "Rahul", "Salman"];
// const searchKeyword = "Sa"; // Yeh kuch bhi ho sakta hai: "sa", "SA", "sA"

// const search=employees.filter((name)=>{
//     const lowerCaseName=name.toLowerCase()
//     const lowerCaseKeyword=searchKeyword.toLowerCase()
//     return lowerCaseName.includes(lowerCaseKeyword)
// })
// console.log(search)

// Logic 3 — Data Sorting by Boolean (The "Starred/Pinned Items First" Pattern)
const chatList = [
    { id: 1, name: "Amit", isStarred: false },
    { id: 2, name: "Saif", isStarred: true },
    { id: 3, name: "Rahul", isStarred: false },
    { id: 4, name: "Sajid", isStarred: true }
];
chatList.sort((a,b)=>b.isStarred-a.isStarred)
console.log(chatList)
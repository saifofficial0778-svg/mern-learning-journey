// // Day 2: Logic 1 — Deep Object Flattening (Form Data Payload Pattern)
// const userProfiles = [
//     { 
//         id: "u1", 
//         name: "Saif", 
//         info: { city: "Delhi", pin: 110001 },
//         social: { github: "saifdev" }
//     },
//     { 
//         id: "u2", 
//         name: "Amit", 
//         info: { city: "Mumbai", pin: 400001 },
//         social: { github: "amitcoder" }
//     }
// ];

// const newArr=userProfiles.map((user)=>{
//     return {
//         id:user.id,
//         name:user.name,
//         ...user.info,
//         ...user.social
        
//     }
// })
// console.log(newArr)

// // Day 2: Logic 2 — Array Destructuring & REST Operator (API Response Splitting)
// const trendingProducts = ["iPhone", "MacBook", "AirPods", "Apple Watch", "iPad"];

// const [topProduct,runnerUp,...restOfProduct]=trendingProducts;
// console.log(topProduct)

// Day 2: Logic 3 — Cleaning Objects (Removing Undefined/Null/Empty Payloads)
const searchFilters = {
    category: "Electronics",
    minPrice: "",
    searchKeyword: undefined,
    brand: null
};

const arr = Object.entries(searchFilters);
const Search=arr.reduce((acc,curr)=>{
    if(curr[1]){
        acc[curr[0]]=curr[1]
    }

    return acc
},{})
console.log(Search)
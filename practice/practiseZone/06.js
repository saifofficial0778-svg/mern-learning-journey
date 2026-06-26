// // Day 6: Logic 1 — Array Sub-array Chunking (The "Pagination / Grid Layout" Pattern)
// const allProducts = ["Laptop", "Phone", "Shirt", "Jeans", "AirPods", "Watch"];
// const chunkSize = 2;
// const chunk = []
// for (let i = 0; i < allProducts.length; i += chunkSize) {
//     const arr = allProducts.slice(i, i + chunkSize)

//     chunk.push(arr)
// }
// console.log(chunk)

// // Logic 2 — Object Value Transformation (The "Currency Converter" Pattern)
// const dollarPrices = {
//     laptop: 1000,
//     phone: 500,
//     watch: 200
// };
// const exchangeRate = 85;
// const arr=Object.entries(dollarPrices).reduce((acc,curr)=>{
//     acc[curr[0]]=curr[1]*exchangeRate
//     return acc
// },{})
// console.log(arr)

// Logic 3 — Find the Most Frequent Item (The "Trending Topic" Pattern)
const productVotes = {
    iPhone: 5,
    MacBook: 12, // 🔥 Yeh sabse zyada popular hai!
    AirPods: 3
};
const arr=Object.entries(productVotes).sort((a,b)=>b[1]-a[1])
console.log(arr[0])
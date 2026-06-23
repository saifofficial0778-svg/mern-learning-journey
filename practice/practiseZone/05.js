// Day 5: Logic 1 — Grouping Array of Objects by Property (The "Category Organizer" Pattern)
const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Shirt", category: "Clothing" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Jeans", category: "Clothing" }
];

const category=products.reduce((acc,curr)=>{
    const cat=curr.category
    if(!acc[cat]){
        acc[cat]=[]
    }
    acc[cat].push(curr)
    return acc
},{})
console.log(category)

// Logic 2 — Multi-Field Aggregation (The Dashboard Stats Pattern)
const transactions = [
    { id: 1, type: "income", amount: 5000 },
    { id: 2, type: "expense", amount: 1200 },
    { id: 3, type: "income", amount: 2000 },
    { id: 4, type: "expense", amount: 800 }
];

const output=transactions.reduce((acc,curr)=>{
    if(curr.type==="income"){
        acc.totalIncome+=curr.amount
    }
    if(curr.type==="expense"){
        acc.totalExpense+=curr.amount
    }
    acc.balance=acc.totalIncome-acc.totalExpense


    return acc
},{ totalIncome: 0, totalExpense: 0, balance: 0 })
console.log(output)

// Logic 3 — Object Array Index Lookup & Update (The "Cart Item Quantity Toggle" Pattern)
const cart = [
    { id: "p1", name: "iPhone", price: 80000, quantity: 1 },
    { id: "p2", name: "AirPods", price: 15000, quantity: 2 }
];

const targetId = "p1"; // User ne iPhone ka plus button dabaya hai!

const newCart=cart.map((item)=>{
    if(item.id===targetId){
        item.quantity+=1
        return item
    }
    return item
})
console.log(newCart)
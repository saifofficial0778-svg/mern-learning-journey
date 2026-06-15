const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Shirt", category: "Clothing" },
    { id: 3, name: "Phone", category: "Electronics" },
    { id: 4, name: "Jeans", category: "Clothing" }
];

const groupedData=products.reduce((acc,curr)=>{
    const cat=curr.category
    if(!acc[cat]){
        acc[cat]=[]
    }
    acc[cat].push(curr)
    return acc
},{})
console.log(groupedData)
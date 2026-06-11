const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", stock: 5 },
    { id: 2, name: "Shirt", category: "Clothing", stock: 12 },
    { id: 3, name: "Phone", category: "Electronics", stock: 8 },
    { id: 4, name: "Jeans", category: "Clothing", stock: 3 }
];

const groupedData=inventory.reduce((gullak,product)=>{
    const cat=product.category;

    if(!gullak[cat]){
        gullak[cat]=[]
    }
    gullak[cat].push(product);
    return gullak

},{})
console.log(JSON.stringify(groupedData, null, 2))
const cart = [
    {
        item: "Shoes",
        price: 1200
    },
    {
        item: "T-shirt",
        price: 800
    },
    {
        item: "Watch",
        price: 2500
    },
    {
        item: "Cap",
        price: 400
    }
];

const bill=cart.reduce((total,product)=> total+product.price,0);

console.log(bill)
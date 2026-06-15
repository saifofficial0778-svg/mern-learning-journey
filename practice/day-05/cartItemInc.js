const cart = [
    { id: "p1", name: "iPhone", price: 80000, quantity: 1 },
    { id: "p2", name: "AirPods", price: 15000, quantity: 2 }
];

const targetId = "p1"; // User ne iPhone ka plus button dabaya hai!

const newCart=cart.map((product)=>{
    if(product.id===targetId){
        return {...product,quantity:product.quantity+1}
    }
    return product

})
console.log(newCart)
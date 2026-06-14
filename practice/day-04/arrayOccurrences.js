const cartItems = ["iPhone", "AirPods", "iPhone", "MacBook", "AirPods", "iPhone"];

const count=cartItems.reduce((gullak,current)=>{
    if(gullak[current]){
       gullak[current]++;
    }else{
         gullak[current]=1
    }
    
    return gullak;
},{})
console.log(count)
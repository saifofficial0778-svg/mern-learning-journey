const allProducts = ["Laptop", "Phone", "Shirt", "Jeans", "AirPods", "Watch"];
const chunkSize = 2;
const chunk=[]
for(let i=0; i<allProducts.length;i+=chunkSize){
    const arr=allProducts.slice(i,i+chunkSize)
      
    chunk.push(arr)
}
console.log(chunk)
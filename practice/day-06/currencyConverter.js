const dollarPrices = {
    laptop: 1000,
    phone: 500,
    watch: 200
};
const exchangeRate = 85;
const arr=Object.entries(dollarPrices)
// console.log(arr)

const rupeePrice=arr.reduce((acc,[key,value])=>{
    acc[key]=value*exchangeRate
    return acc
},{})
console.log(rupeePrice)
const searchFilters = {
    category: "Electronics",
    minPrice: "8000",
    searchKeyword: undefined,
    brand: null
};

const data=Object.entries(searchFilters)
const cleanData=data.reduce((gullak,current)=>{
    if(current[1]){
        gullak[current[0]]=current[1]
    }
    return gullak
},{})

console.log(cleanData)
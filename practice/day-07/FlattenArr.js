const batches = [
    ["s1", "s2"],
    ["s3", "s4"],
    ["s5", "s6"]
];

const newArr=batches.reduce((acc,curr)=>{
    // acc[curr[0]]=curr
    return acc.concat(curr)
},[])
console.log(newArr)
let arr=[1,2,2,3,4,5,5,6];

let newSet=[];

for(let i=0; i<arr.length;i++){
    if(!newSet.includes(arr[i])){
        newSet.push(arr[i]);
    }
}
console.log(newSet)
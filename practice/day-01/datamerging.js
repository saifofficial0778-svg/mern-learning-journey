const localUsers = [
    { id: "u1", name: "Saif", status: "pending" },
    { id: "u2", name: "Amit", status: "pending" }
];
const apiUpdates = [
    { id: "u1", status: "verified" },
    { id: "u2", status: "rejected" }
];

const userMap=apiUpdates.reduce((gullak,current)=>{
    gullak[current.id]=current;
    return gullak;
},{})
// console.log(JSON.stringify(userMap,null,2))
const mergeData=localUsers.map((user)=>{
    if(userMap[user.id]){
        return{
            ...user,
            status:userMap[user.id].status
        }
    }
    return user
})
console.log(JSON.stringify(mergeData, null, 2));
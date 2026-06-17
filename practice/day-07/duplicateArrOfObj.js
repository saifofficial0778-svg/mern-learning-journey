const users = [
    { id: 101, name: "Saif" },
    { id: 102, name: "Amit" },
    { id: 101, name: "Saif UI" }, // 🚨 Duplicate ID! (101 pehle aa chuka hai)
    { id: 103, name: "Rahul" }
];

const seenId={}

const uniqueUsers=users.filter((user)=>{
    if(seenId[user.id]){
        return false;
    }else{
        seenId[user.id]=true
        return true
    }
})
console.log(uniqueUsers)
// 🎯 Day 3: Logic 3 — Finding Differences (The "Unsubscribed / Left-Out" Pattern)
const allUsers = [
    { id: "u1", name: "Saif" },
    { id: "u2", name: "Amit" },
    { id: "u3", name: "Rahul" },
    { id: "u4", name: "Gaurav" }
];

const completedTaskUsers = [
    { id: "u2", name: "Amit" },
    { id: "u4", name: "Gaurav" }
];

const completedUser=completedTaskUsers.reduce((gullak,current)=>{
    gullak[current.id]=current
    return gullak
},{})
const pendingUser=allUsers.filter(f=>!completedUser[f.id])
console.log(pendingUser)
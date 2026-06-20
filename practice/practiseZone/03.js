// // Day 3: Logic 1 — Deep Object Merging (Redux State / Config Override Pattern)
// const defaultSettings = {
//     theme: "light",
//     notifications: { email: true, sms: false },
//     features: { analytics: true, betaAccess: false }
// };



// const userSettings = {
//     theme: "dark",
//     notifications: { sms: true } // User ne email ke baare me kuch nahi bola!
// };

// const final={
//     ...defaultSettings,
//     theme:userSettings.theme,
//     notifications:{...defaultSettings.notifications,...userSettings.notifications}
//     }

// console.log(final)

// // Day 3: Logic 2 — Object Property Exclusion (Sensitive Data Strip Pattern)
// const userRecord = {
//     id: "u101",
//     name: "Saif",
//     email: "saif@example.com",
//     role: "Developer",
//     password: "hashed_secret_password_123",
//     salt: "random_salt_456"
// };

// const {password,salt,...data}=userRecord
// console.log(data)

// Day 3: Logic 3 — Finding Differences (The "Unsubscribed / Left-Out" Pattern)
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

const lookUp=completedTaskUsers.reduce((acc,curr)=>{
    acc[curr.id]=curr
    return acc
},{})
// console.log(lookUp)

const inCompleteUser=allUsers.filter((user)=>{
    if(!lookUp[user.id]){
        return user
    }
})
console.log(inCompleteUser)
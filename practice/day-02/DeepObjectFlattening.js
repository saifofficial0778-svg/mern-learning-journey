const userProfiles = [
    { 
        id: "u1", 
        name: "Saif", 
        info: { city: "Delhi", pin: 110001 },
        social: { github: "saifdev" }
    },
    { 
        id: "u2", 
        name: "Amit", 
        info: { city: "Mumbai", pin: 400001 },
        social: { github: "amitcoder" }
    }
];

const obj=userProfiles.map((user)=>{
    return {
        id:user.id,
        name:user.name,
        ...user.info,
        ...user.social
    }
})
console.log(JSON.stringify(obj,null,2))
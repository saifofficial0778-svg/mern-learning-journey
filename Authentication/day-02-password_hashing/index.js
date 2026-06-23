const bcrypt =require('bcrypt')

const plainPassword="Bunty@123"

async function registerUser(){
    try{
        const saltRound=10

        const hashedPassword=await bcrypt.hash(plainPassword,saltRound)
        console.log("original Password:",plainPassword)
        console.log("database me save hone wala hash:",hashedPassword)
    }catch(error){
        console.error("kuch gadbad ho gai",error)
    }
}
registerUser()
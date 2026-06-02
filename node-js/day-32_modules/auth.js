const login=(email,password)=>{
    if(email==="saif@gmail.com" && password==="saif123"){
        return{success:true, messege:"Welcome to School ERP!"};
    }
    return {success:false, messege:"Invalid Credential"}
}
const SchoolName="Shree Bharti Public School";

module.exports={
    login,
    SchoolName
};
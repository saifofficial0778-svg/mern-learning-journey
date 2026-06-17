const emails = ["saif@test.com", "amit@test.com", "saif@test.com", "rahul@test.com", "amit@test.com"];

const seen={};
const dupliacteEmails=emails.filter((email)=>{
    if(seen[email]){
        return true;
    }else{
        seen[email]=true;
        return false
    }
})
console.log(dupliacteEmails)


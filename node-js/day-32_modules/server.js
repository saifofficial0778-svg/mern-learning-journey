const authModule=require('./auth');

console.log(`System connect to : ${authModule.SchoolName}`);

const userLogin=authModule.login("saif@gmail.com","saif123");
console.log("LOgin result: ",userLogin.messege);
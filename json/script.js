// console.log("hello saif")
// const userObj=
// {
//     name:"bro",
//     topic:"JSON"

// };
// console.log(userObj)

// const jsonString = JSON.stringify(userObj);

// console.log(jsonString);

// const actualObj=JSON.parse(jsonString);
// console.log(actualObj);

const transactionList =[
{id:101, text:"salary", amount:25000},
{id:102, text:"room rent", amount:-8000}
];

const stringData = JSON.stringify(transactionList);
console.log("string bn gai:",stringData);

localStorage.setItem("myTransaction",stringData);

const dataFromStorage =  localStorage.getItem("myTransaction");

const finalData= JSON.parse(dataFromStorage);

console.log("pehle item ka naam:",finalData[0]);
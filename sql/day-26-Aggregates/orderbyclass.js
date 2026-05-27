const fees_payment = [
    { name: "Amit", class: "10th", amount: 5000 },
    { name: "Rahul", class: "10th", amount: 4500 },
    { name: "Rohit", class: "11th", amount: 6000 }
];

let finalReport = {};

for(let i=0; i<fees_payment.length;i++){
    let currentItem=fees_payment[i];
    let currentClass=currentItem.class;
    let currentAmount=currentItem.amount;

    if(finalReport[currentClass]!==undefined){
        finalReport[currentClass]+=currentAmount;
    }
    else{
        finalReport[currentClass]=currentAmount;
    }
}
console.log(finalReport)
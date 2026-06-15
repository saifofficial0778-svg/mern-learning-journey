const transactions = [
    { id: 1, type: "income", amount: 5000 },
    { id: 2, type: "expense", amount: 1200 },
    { id: 3, type: "income", amount: 2000 },
    { id: 4, type: "expense", amount: 800 }
];

const total=transactions.reduce((acc,curr)=>{
    if(curr.type==="income"){
        acc.totalIncome+=curr.amount;
    }else{
        acc.totalExpense+=curr.amount
    }
    acc.balance=acc.totalIncome-acc.totalExpense
    return acc
},{totalIncome: 0, totalExpense: 0, balance: 0})

console.log(JSON.stringify(total,null,2))
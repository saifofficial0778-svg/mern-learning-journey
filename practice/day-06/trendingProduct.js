const productVotes = {
    iPhone: 5,
    MacBook: 12, // 🔥 Yeh sabse zyada popular hai!
    AirPods: 3
};

const arr=Object.entries(productVotes)
arr.sort((a,b)=>b[1]-a[1])
console.log(arr[0])
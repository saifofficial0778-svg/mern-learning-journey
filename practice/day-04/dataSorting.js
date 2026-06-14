const chatList = [
    { id: 1, name: "Amit", isStarred: false },
    { id: 2, name: "Saif", isStarred: true },
    { id: 3, name: "Rahul", isStarred: false },
    { id: 4, name: "Sajid", isStarred: true }
];

chatList.sort((a,b)=>b.isStarred-a.isStarred)
console.log(chatList)
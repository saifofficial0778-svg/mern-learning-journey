// Day 8: Logic 2 — The "Array Data Plucker" Pattern (Object Array to Single Array Inversion)
const postTags = [
    { id: 1, tag: "JavaScript" },
    { id: 2, tag: "React" },
    { id: 3, tag: "NodeJS" }
];
// [ "JavaScript", "React", "NodeJS" ]


const tag=postTags.map(item=>item.name)
console.log(tag)
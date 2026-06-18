const students = [
    {
        name: "Saif",
        marks: 85
    },
    {
        name: "Ali",
        marks: 45
    },
    {
        name: "Aman",
        marks: 92
    },
    {
        name: "Zaid",
        marks: 60
    },
    {
        name: "Rahul",
        marks: 75
    }
];

students.sort((a,b)=> a.marks-b.marks);
console.log(students);
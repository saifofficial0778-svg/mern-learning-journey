const students = [
    {
        name: "Saif",
        marks: 85
    },
    {
        name: "Ali",
        marks: 32
    },
    {
        name: "Aman",
        marks: 40
    },
    {
        name: "Zaid",
        marks: 27
    },
    {
        name: "Rahul",
        marks: 76
    }
];

const passStudent=students.filter(student=> student.marks>=40);
console.log(passStudent)
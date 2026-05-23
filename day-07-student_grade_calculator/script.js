console.log("hii saif");
const students = [
    { name: "Rahul", marks: [85, 90, 78, 92, 88] },
    { name: "Anjali", marks: [95, 92, 98, 89, 94] },
    { name: "Vikram", marks: [40, 55, 38, 45, 50] },
    { name: "Priya", marks: [72, 68, 75, 80, 65] }
];
const calculateAverage = (marks) => {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;

};
const getGrade = (average) => {
    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 50) return "C";
    return "F";

};
const getStatus = (average) => {
    return average >= 50 ? "PASS" : "FAIL";
};

console.log("=========================================");
console.log("       STUDENT REPORT CARD SYSTEM        ");
console.log("=========================================\n");

students.forEach(student => {
    const {name,marks}=student;
    const avg=calculateAverage(marks);
    const grade=getGrade(avg);
    const status=getStatus(avg);

    console.log(`Student: ${name.toUpperCase()}`);
    console.log(`Average: ${avg.toFixed(2)}% | Grade : ${grade} | Status : ${status}`);
    console.log("-----------------------------------------");
});

// Filter Top Scorers (Average > 85)
console.log("\n=========================================");
console.log("⭐🌟       TOP SCORERS (>85%)         🌟⭐");
console.log("=========================================");

const topScorers=students.filter(student=>calculateAverage(student.marks)>=85);

topScorers.forEach(scorer=>{
    console.log(`${scorer.name} with an awesome average of ${calculateAverage(scorer.marks).toFixed(2)}%!`)
})
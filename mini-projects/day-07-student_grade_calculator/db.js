// MySQL me jo aapka Pehla Record (Row 1) tha, JS use aise dekhta hai:
const studentRow1 = {
    student_id: 1,
    first_name: "Rahul",
    birth_date: "2005-06-15", // Date string ban gayi
    is_active: true,          // Boolean true
    tuition_fees: 12500.75    // Decimal number ban gaya
};

// MySQL me jo aapka Dusra Record (Row 2) tha:
const studentRow2 = {
    student_id: 2,
    first_name: "Amit",
    birth_date: "2004-08-22",
    is_active: false,
    tuition_fees: 15000.00
};

// Pura 'students' TABLE yani Array of Objects:
const studentsTable = [studentRow1, studentRow2];

// Ab magic dekho: Console me ise spreadsheet ki tarah print karte hain
console.log("Visualizing MySQL Table inside JavaScript:");
console.table(studentsTable);
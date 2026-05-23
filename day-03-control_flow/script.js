console.log("day 3 of control flow");

// 1. if / else if / else (Decision Making)
let speed = 75;

if (speed > 80) {
    console.log("Bhai, challan katega tera!");
} else if (speed > 60) {
    console.log("Sahi chal rahe ho, control me hai.");
} else {
    console.log("Thoda tez chala le bhai, bohot slow hai.");
}
// Output: Sahi chal rahe ho, control me hai.

// 2. Ternary Operator (Short-cut If-Else)
let age = 19;

// If-else ka shortcut:
let status = (age >= 18) ? "Daaru milegi" : "Doodh piyo beta";

console.log(status); // Output: Daaru milegi

// 3. Switch Case
let button = 2;

switch(button) {
    case 1:
        console.log("Song Play ho gaya");
        break;
    case 2:
        console.log("Song Pause ho gaya");
        break;
    case 3:
        console.log("Next Song");
        break;
    default:
        console.log("Invalid Button!");
}
// Output: Song Pause ho gaya

// 4. Loops (for, while, do-while)
// 1. FOR LOOP (1 se 3 tak ginti)
for (let i = 1; i <= 3; i++) {
    console.log(`Push-up number: ${i}`);
}

// 2. WHILE LOOP
let rotiCount = 1;
while (rotiCount <= 3) {
    console.log(`Khai roti number: ${rotiCount}`);
    rotiCount++;
}

// 3. DO-WHILE LOOP (Condition pehle se hi galat hai fir bhi...)
let balance = 0;
do {
    console.log("Ek baar toh transaction zaroor chalega!");
} while (balance > 100);

// 5. Break and Continue
// BREAK EXAMPLE: Chor bhaag raha tha, 3rd floor par pakda gaya
for (let floor = 1; floor <= 5; floor++) {
    if (floor === 3) {
        console.log("Chor mil gaya floor 3 par! Chasing STOP.");
        break; 
    }
    console.log(`Checking floor ${floor}...`);
}

console.log("---");

// CONTINUE EXAMPLE: Society me checking, floor 3 par rishtedar rehte hain toh skip kar diya
for (let floor = 1; floor <= 5; floor++) {
    if (floor === 3) {
        console.log("Floor 3 par toh Mausa ji hain, skip karo!");
        continue; 
    }
    console.log(`Checking floor ${floor}...`);
}
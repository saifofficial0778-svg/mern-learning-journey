console.log("Day-02 of variables")
// 1. var vs let vs const (Variables)
var name = "Rahul"; // Purana tarika

let pocketMoney = 500; 
pocketMoney = 600; // Chalega, paisa badh sakta hai!

const birthYear = 2000;
// birthYear = 2001; // ERROR! Paidaish ka saal change nahi ho sakta.

// 2. Data Types & typeof Operator
let user = "Amit";      // String
let age = 22;           // Number
let isLogined = true;   // Boolean
let gf = null;          // Jaan-bhooch kar khaali rakha hai (Sad life)
let bankBalance;        // undefined (Dabba banaya par paisa daalna bhool gaye)

console.log(typeof user);        // Output: "string"
console.log(typeof age);         // Output: "number"
console.log(typeof bankBalance); // Output: "undefined"
console.log(typeof gf);

// 3. String Methods
let meme = "Jalwa hai hamara!";

console.log(meme.length);
console.log(meme.toUpperCase());

console.log(meme.includes("Jalwa"));

console.log(meme.slice(0,5));

// 4. Template Literals
let item = "Samosa";
let price = 15;

// Purana ganda tarika:
// console.log("Ek " + item + " ki keemat " + price + " rupaye hai.");

// Naya mast tarika (Template Literal):
console.log(`Ek ${item} ki keemat ${price} rupaye hai.`); 
// Output: Ek Samosa ki keemat 15 rupaye hai.
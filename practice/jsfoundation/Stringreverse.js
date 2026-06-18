let name = "saif";

// let reversed = name.split("").reverse().join("");

// console.log(reversed);

let reversed = "";

for (let i = name.length - 1; i >= 0; i--) {
    reversed+=name[i];
}
console.log(reversed);
// Topic 1: Event Loop — How JavaScript is Async?

console.log("1.Chai ka order liya");

setTimeout(function tikkaCallBack(){
    console.log("2.Tandoori Tikka taiyar ho gya!");
},3000);

console.log("3. Agle custome se baat ki");

// Topic 2: Call Stack + Web APIs + Callback Queue

function greet(){
    console.log("Hello!")
}
setTimeout(greet,3000);

// Topic 3: Microtask Queue vs Macrotask Queue (Callback Queue)

console.log("Start")

setTimeout(function(){
    console.log("Timeout (Macrotask)");
},0);

Promise.resolve().then(function(){
    console.log("Promise (Microtask)")
});

console.log("End");

// Topic 4: setTimeout and setInterval Internals

// 1. setTimeout(..., delay) ka Asli Sach: "Minimum Delay, Not Fixed Delay"
console.log("1. Code Shuru Hua");

// Humne 2 second ka alarm lagaya
setTimeout(() => {
    console.log("3. Alarm: Bhai 2 second ho gaye, mai chal gaya!");
}, 2000);

console.log("2. JS Engine ab ek bade kaam me fasne ja raha hai...");

// MUMMY KA POOCHA (Blocker Code): Yeh loop pure 5 second tak JS Stack ko block karega
let startTime = Date.now(); // Abhi ka time
let endTime = startTime;

// Jab tak 5000ms (5 second) nahi beet jaate, JS isi loop me gol-gol ghumta rahega
while (endTime < startTime + 5000) {
    endTime = Date.now(); 
}

console.log("4. Jhadu-Pocha Khatam! JS Engine ab jaakar khali hua.");

// 2. setInterval ka Siyapa aur Uska Pro Solution
// Har 1 second me golgappa counter par aayega
setInterval(() => {
    console.log("Golgappa counter par aaya...");
    
    // Maano yeh kaam andar chalne me 3 second le raha hai (Heavy Task)
    let start = Date.now();
    while(Date.now() < start + 3000) {} 
    
}, 1000);

// Sahi Tareeka (The Pro Solution - Recursive setTimeout):
function heavyGolgappaTask() {
    console.log("1. Golgappa khana SHURU kiya...");

    // Maano is golgappe ko khane me 3 second lage (Heavy Code)
    let start = Date.now();
    while(Date.now() < start + 3000) {} 

    console.log("2. Golgappa KHATAM ho gaya!");

    // AB SABSE BADA TWIST: Kaam khatam hone ke BAAD agla timer set karo
    console.log("3. Ab agla golgappa 1 second baad aayega.\n");
    setTimeout(heavyGolgappaTask, 1000);
}

// Pehli baar function ko start karne ke liye
setTimeout(heavyGolgappaTask, 1000);
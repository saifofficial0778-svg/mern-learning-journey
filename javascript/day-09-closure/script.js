console.log("day-9 of closure")

// closure

function dukaan() {
    let gullak = 100; // Dukaan ki gullak me 100 rupaye hain

    function chotu() {
        // Chotu isi dukaan ka hai, toh gullak dekh sakta hai
        console.log("Gullak me hain: " + gullak); 
    }

    return chotu; // Malik ne Chotu ko bola: "Tu ab bahar ja"
}

const chotuBaharAaGaya = dukaan();

// chotuBaharAaGaya();
// dukaan();

// Topic 2.1: Private Counter 

function createCounter(){
   let count=0;

   return{
    up:function(){
        count++;
        console.log("Value badh gai: "+count);
    },
    down:function(){
        count--;
        console.log("Value ghat gai: "+count);
    }
   };
}
let myCounter = createCounter();

myCounter.up();
myCounter.up();
myCounter.up();
myCounter.down();
myCounter.down();

// Topic 3: IIFE (Immediately Invoked Function Expression)

(function(){
    let secretCode="ERP-12345";
    console.log("Main IIFE hoon, aur main turant chal gaya")

})();
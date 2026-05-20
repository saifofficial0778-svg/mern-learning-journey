console.log("hii srms");

sayhello();

function sayhello(){
    console.log("Hey bhai! Kaiso ho");
}

const sayBye=function(){
console.log("Chlo bhai , milte hai baad me!");
};
sayBye();

const doubleArrow=(number)=>{
    return number*5;
};
console.log(doubleArrow(7));

function sayGharKaNaam(naam = "Bhai") {
    console.log(`Aur batao, kaise ho ${naam}?`);
}
sayGharKaNaam("saif");
sayGharKaNaam();

function addCardItems(...items) {
    let total = 0;
    for(let price of items) {
        total += price;
    }
    return total;
}
console.log(addCardItems(100,200,300,400,500));


let mohalleKaNalka = "Paani"; // Global Variable

function ghar() {
    let personalTijori = "Ghehna"; // Local Variable
    
    console.log(mohalleKaNalka); // 1. Chalega! (Ghar ke andar mohalle ka paani aa sakta hai)
    console.log(personalTijori); // 2. Chalega! (Ghar ke andar apna saman dikhega)
}

ghar();

console.log(mohalleKaNalka); // 3. Chalega! (Baahar khule me nalka dikh raha hai)
//  console.log(personalTijori); // 4. ERROR! Baahar ke logo ko ghar ki tijori nahi dikhegi

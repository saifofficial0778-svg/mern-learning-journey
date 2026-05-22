console.log("Day 6 Of Object");
//Step 1: Objects — Create, Access, & Methods
let myBike = {
    name: "Splendor",
    mileage: 65,

    startBroom: function () {
        console.log("Vroom Vroom! Gadi chal padi!");
    }

};

console.log(myBike.name);
console.log(myBike.mileage);
myBike.startBroom();
//example-01
let smartAC = {
    temperature: 24,
    checkCooling: function () {
        if (this.temperature >= 25) {
            console.log("Bohot garmi hai, AC full pe chalao!");
        }
        else {
            console.log("Mausam sahi hai, chill karo.");
        }
    }
};

smartAC.checkCooling();

//example-02
let instaPost = {
    username: "Mohd_Saif",
    like: 100,
    likePost: function () {
        this.like = this.like + 1;
        console.log("Post liked by someone! Total likes:" + this.like);
    }
};

instaPost.likePost();
instaPost.likePost();

//exapmle-03-swiggy_cart
let swiggyCart = {
    itmeName: "Biryani",
    price: 250,
    deliveryCharge: 40,

    totalBill() {
        let totalPrice = this.price + this.deliveryCharge;
        console.log("total bill of the cart is:" + totalPrice);
    }

};

swiggyCart.totalBill();

// Step 2: Dot vs Bracket Notation 🥊
let cryptoCoin = {
    "coin name": "Bitcoin",
    price: 600000,

};
let target = "price";

console.log(cryptoCoin[target]);

//example-02
let student = {
    name: "Aman",
    rollNo: 12,
    branch: "Information Technology"
};
let userInput = "branch";

console.log(student[userInput]);

// Challenge 3: Locker System (Object Me Naya Data Daalna)
let myLocker = {};
let itemType = "gold";
myLocker[itemType] = "100 grams";

console.log(myLocker);

// Step 3: Destructuring Kya Hai?
// 1. Object Destructuring
let player = { name: "Virat", jersey: "18", role: "Batsman" };

let { name, jersey, role } = player;

console.log(name);

// challenge 01
let movie = {
    title: "Pushpa 2",
    actor: "Allu Arjun",
    boxOffice: "1000Cr+",
    director: "Sukumar"
};
let { title, actor, boxOffice } = movie;
console.log(actor + " ki movie " + title + " ne " + boxOffice + " kamaya!")

// 2. Array Destructuring
let mySkills = ["JavaScript", "HTML", "CSS"];

let [primary, secondary] = mySkills;

console.log(primary)

// challenge-02;
let raceWinners = ["Rahul", "Amit", "Sumit", "Rohan", "Vikas"];
let [gold, silver, bronze] = raceWinners;
console.log("Gold Wineer is " + gold)

// Challenge 3: Pro Level Trick (Variable Swap)
let chai = "Khaali Cup";
let biscuit = "Chai me duba hua";

[chai, biscuit] = [biscuit, chai];
console.log(chai);

// 1. Default Values (Back-up Plan)
// Renaming / Aliasing (Apna Naam Dena)

let gamer = {
    tag: "ProGamer99",
    score: 450
};
let { tag: gamerName, rank = "Gold" }=gamer;

console.log(gamerName)

// Part 1: Spread Operator (...) — "Copy-Paste ka Jadu
let oldPhone={
    brand: "Samsung",
    ram: "6GB",
    network: "4G"
};

let newPhone={
    ...oldPhone,
    network:"5G",
    camera:"108MP"
};
console.log(newPhone);

// Part 2: Object Methods — "Kundali Nikalne Wale Tools"
let heropanti = { name: "Tiger", dialogue: "Choti bachi ho kya", age: 33 };
// 1. Object.keys() — Sirf Chabiyaan (Names)
console.log(Object.keys(heropanti));
// 2. Object.values() — Sirf Maal (Data)
console.log(Object.values(heropanti));
// 3. Object.entries() — Jodiyaan (Key + Value)
console.log(Object.entries(heropanti));

// (Spread + Methods Challenge)
let userBase={
    admin:"Rahul",
    status:"Active"
};
let updatedUserBase={
    ...userBase,
    moderator:"Amit",
    status:"superActive"
};
console.log(updatedUserBase)
console.log(Object.keys(updatedUserBase));

// Step 5: Optional Chaining (?.) Kya Hai?
let seller1 = {
    companyName: "Sharma Electronics",
    contactDetails: {
        email: "sharma@elec.com",
        supportTeam: {
            managerPhone: "9876543210"
        }
    }
};

let seller2 = {
    companyName: "Gupta Saree Wale",
    contactDetails: {
        email: "gupta@saree.com"
        // Inke paas koi supportTeam ya managerPhone ka data nahi hai!
    }
};
console.log(seller1.contactDetails?.supportTeam?.managerPhone)
console.log(seller2.contactDetails?.managerPhone);
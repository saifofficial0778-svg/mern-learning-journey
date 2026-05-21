console.log("Day -05 -->Array");

//1. Create,Access,and Mutate

// Create
let fruits=["Apple","Banana","Mango"];
//Access

console.log(fruits[0]);
console.log(fruits[1]);

//Mutate
fruits[1]="orange";
console.log(fruits);

//2. Basic Methods (Push, Pop, Shift, Unshift)

let number=[2,3,4];

// push: last mein add karo
number.push(5);

// pop: last se hatao
number.pop();

// unshift: start mein add karo
number.unshift(10);

// shift: start se hatao
number.shift();

console.log(number);

//3. splice() — Ek teer se do shikaar
let color=["Red","Green","Blue","Yellow"];

color.splice(0,2,"purple","Pink");
console.log(color);

//4: Map
let numbers = [1, 2, 3, 4];

let double=number.map(num=> num*2);

console.log(double);

// 5. filter()
let age=[12,25,17,30,18];

let adult = age.filter(age => age>=18);

console.log(adult);

// 6. reduce()
let cartPrice = [100,250,500];

let totalBill = cartPrice.reduce((acc,curr)=> acc+curr,0);

console.log(totalBill);

// 7.forEach()
 let students=["Saif","Muskan","Amit"];

 students.forEach(naam => {
    console.log(naam +" is Present! ");
 });
 
//8. find()
let scores = [10,45,80,50,90];

let firtTopper = scores.find(score => score>50);
console.log(firtTopper);

// 9.some()
let ages=[15,16,22,14];

let koiHaiKya = ages.some(age=> age>=18);
console.log(koiHaiKya)

//10.every();
let marks=[40,50,60,70];

let sabPassHain=marks.every(mark=>mark>=30);
console.log(sabPassHain);

// Part 4: Spread Operator [...arr]
//i)Array ki Ekdum Fresh Copy Banana (Cloning)

let original = [1,2,3];
let copy=[...original];

copy.push(4);
console.log(original);
console.log(copy);

// ii)Do Arrays ko Aapas mein Jodhna (Merge)

let veg =["Aloo","Ghobi"];
let nonVeg=["Chicken","Mutton"];

let fullMenu = [...veg,...nonVeg,"Panner"];
console.log(fullMenu);
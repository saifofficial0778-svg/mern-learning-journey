// Day 8: Logic 3 — Check If Any/All Items Match a Condition (The "Access Control" Pattern)

const familyAges = [25, 32, 8, 45]; // 🚨 8 saal ka ek bacha hai isme!

const isRestricated=familyAges.some(age=>age<18)
console.log(isRestricated)

const canWatchTogether=familyAges.every(age=>age>=18)
console.log(canWatchTogether)
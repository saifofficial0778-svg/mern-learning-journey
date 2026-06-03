const EventEmitter = require('events');

const erpSystem = new EventEmitter;

erpSystem.on('admission',(studentName)=>{
    console.log(`[Notification]: ${studentName} ka admission confirm ho gaya. SMS bhej diya!`)
});

erpSystem.once('discount',(studentName)=>{
    console.log(`[Discount]: ${studentName} ko New Year discount mil gaya! (Sirf ek ko hi milega)`)
})

// ---- AB EVENTS KO TRIGGER KARTE HAIN (EMIT) ----

console.log("--- Day 1 ---");
erpSystem.emit('admission','Saif')
erpSystem.emit('discount','Saif')

console.log("\n--- Day 2 ---");
erpSystem.emit('admission',"Amit")
erpSystem.emit('discount','Amit')
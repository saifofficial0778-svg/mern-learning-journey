const EventEmitter= require('events');

const schoolErp=new EventEmitter;

schoolErp.on('feesSubmission',(studentName,amount)=>{
    console.log(`[Accounts]: Receipt generated for ${studentName} of Rs.${amount}.`)
});
schoolErp.on('feesSubmission',(studentName)=>{
    console.log(`[Library]: Access granted to ${studentName} for this month.`)
});
schoolErp.on('feesSubmission',(studentName,amount)=>{
    console.log(`[SMS]: Dear Parent, Rs.${amount} received for ${studentName}'s monthly fees.`)
})

// ---- REAL ACTION (Jab sach me fees jama hui) ----
console.log("--- Cashier Counter Par Entry Hui ---");
schoolErp.emit('feesSubmission','Mohd Saif',5000)
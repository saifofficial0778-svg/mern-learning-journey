require('dotenv').config();

process.on('uncaughtException',(error)=>{
    console.log("\n🚨 --- GLOBAL EMERGENCY: UNCAUGHT EXCEPTION --- 🚨");
    console.error(`Bhai, kisi developer ne try/catch lagana bhool gaya!`);
    console.error(`Galti yeh hai: ${error.message}`);

    console.log("App ko abhi safe tarike se band kar rahe hain...");

    process.exit(1);
});

function feeCalculator(amount){
    let finalFee=amount+totalAmount;
    return finalFee;
}
console.log('server shrur ho gaya');

feeCalculator(5000);

// Agar upar uncaughtException handler nahi hota, toh yeh niche wali line tak code kabhi pahunchta hi nahi aur ganda crash hota.
console.log("Yeh line nahi chalegi kyunki app exit ho chuka hoga, par gracefully!");
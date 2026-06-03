// Topic 1: Event-driven programming
let clickKaKaam;

function jorSeBoloJabClickHo(koiBhiFunction){
    clickKaKaam=koiBhiFunction;
}
jorSeBoloJabClickHo(()=>{
    console.log("Reaction: Pura code chakachak chal gaya bhai!");
})

function userNeButtonDabaya(){
    console.log("-> Kisi ne button par click kiya!")

    if(clickKaKaam){
        clickKaKaam();
    }
}
userNeButtonDabaya()


// Topic 1: Buffer Kya Hota Hai? (The Core Concept)
const khaliBuffer=Buffer.alloc(10);
console.log("khali buffer (in Hex):",khaliBuffer)

const myBuffer =  Buffer.from("Hello bhai");
console.log("String wala buffer:",myBuffer)

console.log(myBuffer.toString())


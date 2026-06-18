let num1 = 20;
let num2 = 10;

let operation = "add";


switch(operation){
   
    case "add":
        console.log(num1+num2);
        break;
    
    
        case "subtract":
            console.log(num1 - num2);
            break;

        case "multiply":
            console.log(num1 * num2);
            break;

        case "divide":
            console.log(num1 / num2);
            break;

        default:
            console.log("Invalid Operation");

}

// Topic 1: OOP (Object-Oriented Programming) Kya Hai?
// 1. Encapsulation & 2. Abstraction ka Code
class BankAccount {
    constructor(holderName, initialBalance) {
        this.holderName = holderName;
        this.#balance = initialBalance;
    }
    #balance;

    get checkBalance() {
        return this.#balance;
    }

    // 2. ABSTRACTION: Ye function andar bhot kuch check kar raha hai,
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Bhai , sahi amount to daalo");
            return;
        }
        if (amount > this.#balance) {
            console.log("Maaf karna bhai, account me itne paise nhi hai")
            return;

        }
        this.#balance -= amount;
        console.log(`₹${amount} nikal gya, Naya balance : ₹${this.#balance}`)
    }
}
const account = new BankAccount("saif", 1000);
console.log(account.checkBalance);

account.withdraw(400)
account.withdraw(200)
account.withdraw(500)

// 3. Inheritance ka Code

class SavingAccount extends BankAccount {
    constructor(holderName, initialBalance, interestRate) {
        super(holderName, initialBalance);
        this.interestRate = interestRate;
    }
    addInterest() {
        let currentBal = this.checkBalance;
        let interest = (currentBal * this.interestRate) / 100;

        console.log(`apko ${interest} ka interest mila bhai ${currentBal}  amount pr`)
    }
}
const mySavings = new SavingAccount("saif", 5000, 4);
mySavings.withdraw(1000);
mySavings.addInterest();

// 4. Polymorphism ka Code

class StudentAccount extends BankAccount {
    // Polymorphism: Hum parent ke 'withdraw' function ko yahan "OVERRIDE" (badal) rahe hain
    withdraw(amount) {
        if (amount > 500) {
            console.log("Oye! Student ! 500 se zayada nahi nikal skate tum");
        } else {
            super.withdraw(amount)
        }
    }
}
const normaluser = new BankAccount("saif", 2000);
const studentUser = new StudentAccount("Azeem ", 2000);

normaluser.withdraw(1000);
studentUser.withdraw(100)

// Topic 3: new keyword (Peeche ki Kahani)
// Topic 4: this keyword (Context Samjho)

class Player {
    constructor(playerName, score) {
        this.name = playerName;
        this.score = score;
        console.log("Current this is :", this);
    }
    intro() {
        console.log(`Yo! Mera naam ${this.name} hai aur mera score ${this.score} hai.`)
    }

}
const p1 = new Player("saif", 100);
const p2 = new Player("Azeem", 50);

p1.intro();
p2.intro();

// 1. Class: Sirf ek Sundar Packaging (Syntactic Sugar)
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showDetails() {
        console.log(`Product : ${this.name}, Price: ${this.price}`);
    }
}
const pro1 = new Product("Laptop", 30000)

pro1.showDetails();

// 2. Constructor Method: The Birthplace of Properties
class User {
    isLoggin = false;
    role = "Student"
    constructor(userName, email) {
        this.name = userName;
        this.email = email;
    }
}
const user1= new User("rahul_99","rahul@gmail.com");
console.log(user1);

// Topic 5: Instance Properties aur Instance Methods
class ExpenseTracker {
    constructor(title, amount) {
        // 1. INSTANCE PROPERTIES: Har naye object ke paas ye dono variables alag honge.
        this.title = title;
        this.amount = amount;
    }

    // 2. INSTANCE METHOD: Ye function har ek object (instance) ke liye alag se available hoga
    showExpense() {
        // Ye apne wale instance ki properties ko access kar sakta hai 'this' ke zariye
        console.log(`Kharacha: ${this.title} | Amount: ₹${this.amount}`);
    }
}

// Chalo do alag-alag instances (objects) banate hain
const exp1 = new ExpenseTracker("Samosa Party", 150);
const exp2 = new ExpenseTracker("Gym Fees", 2000);

// Dono ke paas apni-apni INSTANCE PROPERTIES hain
console.log(exp1.title); // Output: Samosa Party
console.log(exp2.title); // Output: Gym Fees

// Dono apna-apna INSTANCE METHOD chala rahe hain
exp1.showExpense(); // Output: Kharacha: Samosa Party | Amount: ₹150
exp2.showExpense(); // Output: Kharacha: Gym Fees | Amount: ₹2000
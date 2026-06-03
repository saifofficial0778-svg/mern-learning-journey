// Topic 1: Encapsulation & Private Fields (#)
class BankAccount {
    #balance;
    constructor(owner, initialBalance) {
        this.owner = owner;

        if (initialBalance < 0) {
            this.#balance = 0;
        } else {
            this.#balance = initialBalance
        }
    }
    checkBalance() {
        console.log(`hello ${this.owner} aapka balance hai : ${this.#balance}`)
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`₹${amount} deposit ho gaye.`)
        } else {
            console.log("Valid amount daalo bhai!");
        }
    }
}
const myAccount = new BankAccount("Saif", 5000)
myAccount.checkBalance()
myAccount.deposit(2000);
myAccount.checkBalance()

// Topic 2: Getters and Setters (get and set)
class UserAccount {
    #username;
    #age;
    constructor(username, age) {
        this.#username = username;
        this.#age = age;

    }
    get username() {
        return this.#username.toUpperCase();
    }
    set age(newAge) {
        if (newAge > 0 && newAge < 120) {
            this.#age = newAge
            console.log(`Age successfully update ho gayi: ${this.#age}`)
        } else {
            console.log("❌ Error: Invalid age! Mazak chal raha hai kya?")
        }
    }
    get age() {
        return this.#age;
    }
}
const user = new UserAccount("Saif", 22);
console.log(user.username)
user.age = 25;
console.log(user.age)
user.age = -7

// Topic 3: Static Methods and Properties (static)
class AndroidPhone {
    constructor(serial) {
        this.serialNumber = serial;
    }
    static brandName = "iPhone"

    static checkOSCompatibility(version) {
        if (version >= 14) {
            return "Haan bhai, ye version super-compatible hai!";
        }
        return "Nahi yaar, thoda purana version hai.";
    }
}

const myPhone = new AndroidPhone("XYZ123");

console.log(myPhone.serialNumber)
console.log(AndroidPhone.brandName)
const result = AndroidPhone.checkOSCompatibility(15)
console.log(result)

// Topic 4 & 5: User Class & Constructor Validation
class User {
    #name;
    #email;
    #role;
    constructor(name, email, role) {
        if (typeof name !== 'string' || name.trim() === "") {
            throw new Error("❌ Error: Invalid Name! Naam me kuch to likho bhai.")
        }

        if (!email.includes("@")) {
            throw new Error("❌ Error: Invalid Email! Sahi email id dalo.");
        }
        const allowedRole = ['admin', 'instructor', 'student']
        if (!allowedRole.includes(role.toLowerCase())) {
            throw new Error(`❌ Error: '${role}' koi valid role nahi hai. Sirf admin, instructor, ya student chalega!`);
        }
        this.#email = email;
        this.#name = name;
        this.#role = role.toLowerCase();

        console.log(`🎉 Success: User ${this.#name} successfully create ho gaya!`);

    }

    get userDetails(){
        return `Name: ${this.#name}, Email: ${this.#email}, Role: ${this.#role}`;
    }

}
// ---- TESTING THE CODE ----

// CASE 1: Bilkul sahi data (Sab smoothly chalega)
try {
  const user1 = new User("Rahul", "rahul@erp.com", "student");
  console.log(user1.userDetails);
} catch (error) {
  console.error(error.message);
}

console.log("-----------------------------------------");

// CASE 2: Galat Role dekar test karte hain (Error throw hoga)
try {
  const user2 = new User("Amit", "amit@gmail.com", "hacker"); // 'hacker' allowed nahi hai
} catch (error) {
  console.error(error.message); // Output: ❌ Error: 'hacker' koi valid role nahi hai...
}

console.log("-----------------------------------------");

try {
  const user3 = new User("Bunty", "bunty-gmail.com", "admin"); // '@' missing hai
} catch (error) {
  console.error(error.message); // Output: ❌ Error: Invalid Email!
}
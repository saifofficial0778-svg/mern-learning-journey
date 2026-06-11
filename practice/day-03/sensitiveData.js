const userRecord = {
    id: "u101",
    name: "Saif",
    email: "saif@example.com",
    role: "Developer",
    password: "hashed_secret_password_123",
    salt: "random_salt_456"
};

const{password,salt,...record}=userRecord;

console.log(record)
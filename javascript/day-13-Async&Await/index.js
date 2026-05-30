// Topic 1: async/await

async function getUserData() {
    console.log("1.Data mangane ka process shuru...")
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    let data = await response.json();

    console.log("3.data aa gaya", data.name);

}
console.log("A. Function call se pehle");
getUserData();
console.log("B. Function call ke baad");

// Topic 2: try/catch/finally with async

async function checkLogin() {
    try {
        console.log("1.user ne login dabaya. Butoon ko 'DISABLE' kr do taaki wo baar baar click na kre");

        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let user = await response.json();

        console.log("2.login successfully! Welcome", user.name);
    }catch (error) {
        console.log("3. Error aayi: Internet nahi chal raha!");
    }finally{
        console.log("4. Button ko wapas ENABLE kar do.");
    }
}
checkLogin();

// Topic 3: Fetch API — GET request
async function getAllProducts() {
    try {
        
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');

        console.log("Raw Response Status:", response.status); // Output: 200 
        let data = await response.json();

      
        console.log("Asli Data (Array):", data.slice(0, 2)); // Sirf pehle 2 items dekhne ke liye

    } catch (error) {
        console.log("Network me koi problem hai bhai:", error);
    }
}

getAllProducts();

// Topic 4: POST request with JSON body 📨
async function addNewExpense(){
    try{
        let newExpense={
            tittle:"Office ka Internet Bill",
            amount:1500,
            category:"Bills"
        };

        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newExpense)
        });

        console.log("Server response status :",response.status);

        let responseData = await response.json();
        console.log("Server ne wapas ye bheja (ID ke sath):", responseData);
    }catch (error) {
        console.error("POST request fail ho gayi bhai:", error);
    }
}
addNewExpense();

// Topic 5: Handle API errors properly
async function getEmplopeeData(){
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/users/99');

        if(!response.ok){
            throw new Error(`Server me gadbad hai! Status code: ${response.status}`);
        }
        let data= await response.json();
        console.log("Employee Data: ",data);
    }catch(error){
        console.log("[ERP ERROR LOG]:",error.message);

    }
}
getEmplopeeData();
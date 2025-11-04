let product1 ={
    id:99,
    name:lexus,
    price:500,
    brand:bmw
};

let product2={
    id:98,
    name:laptop,
    price:10000,
    brand:mac
};

let jproduct={...product1,...product2};

//use try catch to see whether age is less than 18 , throw an error object
const age = 16;

try {
    if (age < 18) {
        throw {
            name: "AgeError",
            message: "Age must be 18 or older"
        };
    }
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
//This function should take boundless number of parameters and print them one-by-one
// function printCities(city1, city2) {
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
//REST - Parameter which will pack the function parameters in an array

const travellingCities = ["Bangalore", "Hyderabad", "Pune", "Dubai"];

function printCities(...cities) {
    console.log(cities);
    for (const city of cities) {
        console.log(city);
    }
}
//Spread Operator - Unpack the collection values from an array/object
printCities(...travellingCities);
// printCities("Pune")
// printCities("Pune", "Mumbai")
// printCities("Pune", "Mumbai", "Delhi")

const PizzaOrder = {
    customerId: 3489,
    tokenNumber: 347,
    status: "Order Received and Confirmed"
}
const PizzaInOven = {
    ...PizzaOrder,
    status: "Pizza is getting baked"
}
const PizzaDelivered = {
    ...PizzaOrder,
    status: "Pizza will reach to your door step"
}
console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaDelivered);

let companyName = "Synechron";
for (const char of companyName) {
    console.log(char);
}
console.log("Start of Syne Math Module!");

import  syneSquare from "./syne-other-math";

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
console.log(`Square of 14 is ${syneSquare(14)}`);
console.log("End of Syne Math Module!");

export { addition, subtraction, multiplication, division }
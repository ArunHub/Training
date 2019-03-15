"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('starting of basic math modules');
var advanced_math_1 = require("./advanced-math");
function addition(num1, num2) {
    return num1 + num2;
}
exports.addition = addition;
function subtraction(num1, num2) {
    return num1 - num2;
}
exports.subtraction = subtraction;
function multiply(num1, num2) {
    return num1 * num2;
}
exports.multiply = multiply;
function division(num1, num2) {
    return num1 / num2;
}
exports.division = division;
console.log("square root of 12 is " + advanced_math_1.squareRoot(12));
console.log("square root of 81 is " + advanced_math_1.squareRoot(81));
console.log('ending of basic math modules');
//# sourceMappingURL=basic-math.js.map
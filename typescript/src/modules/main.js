"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('starting of main modules');
// import { addition, subtraction as sub, multiply, division } from "./basic-math"; // normal imports for few imports
var MathObj = require("./basic-math");
var employee_1 = require("./employee"); // default import
console.log("Addtiotion is - " + MathObj.addition(100, 200));
// console.log(`subtraction is - ${sub(600,200)}`); // alias as sub in many exports in a file rather than default
console.log("subtraction is - " + MathObj.subtraction(600, 200)); // alias as sub in many exports in a file rather than default
console.log("multiply is - " + MathObj.multiply(600, 200));
console.log("division is - " + MathObj.division(600, 200));
var emp1 = new employee_1.default();
console.log('ending of main modules');
//# sourceMappingURL=main.js.map
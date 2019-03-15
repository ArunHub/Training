console.log('starting of basic math modules');
import { square, squareRoot } from "./advanced-math";
function addition(num1:number, num2: number): number {
    return num1+num2;
}
function subtraction(num1:number, num2: number): number {
    return num1-num2;
}
function multiply(num1:number, num2: number): number {
    return num1*num2;
}
function division(num1:number, num2: number): number {
    return num1/num2;
}
console.log(`square root of 12 is ${squareRoot(12)}`);
console.log(`square root of 81 is ${squareRoot(81)}`);
console.log('ending of basic math modules');


export {addition, subtraction, division, multiply}
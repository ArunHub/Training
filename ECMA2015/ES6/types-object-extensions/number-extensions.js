let myCode = "NaN";
console.log(isNaN(myCode));
console.log(Number.isNaN(myCode));

let myNumber = '2389';
console.log(Number.isFinite(myNumber));

console.log(parseFloat === Number.parseFloat);
console.log(parseInt === Number.parseInt);
console.log("");
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.34));
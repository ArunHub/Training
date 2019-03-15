let x: number;
x = 100;

function addition(num1:number, num2: number): number {
    return num1+num2;
}

console.log(addition(5,5));
// console.log(addition(5,5,55)); no extra optional value can be given like js

function sub(sub1:number, sub2?:any) {
    return sub1-sub2;
}

console.log(sub(5,6));
console.log(sub(5));

// function subb(sub1?:number, sub2:any) {  optional? cannot come in starting position
//     return sub1-sub2;
// }
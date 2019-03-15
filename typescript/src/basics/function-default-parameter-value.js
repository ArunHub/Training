// let gst:number = 18; dynamic argument/parameter value
// function syneSalesNetProfit(cogs:number, expense: number, actualSales: number, gstPercent: number = gst):number {
//     let gstAmount: number = actualSales * gstPercent / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }
// function getGST() { // function getGST returns value for below function parameter value
//     return 12;
// }
// const IndiaGST = {
//     hotels: 5,
//     IT:18,
//     Import: 29,
//     Emport: 2
// }
// function syneSalesNetProfit(cogs:number, expense: number, actualSales: number, gstPercent: number = getGST()):number {
//     let gstAmount: number = actualSales * gstPercent / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }
// function syneSalesNetProfit(cogs:number, expense: number, actualSales: number, gstPercent: number = 18):number {
//     let gstAmount: number = actualSales * gstPercent / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }
function syneSalesNetProfit(cogs, expense, actualSales, gstPercent) {
    if (gstPercent === void 0) { gstPercent = cogs * 18; }
    var gstAmount = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
// console.log(syneSalesNetProfit(12000,13000,150000));
// console.log(syneSalesNetProfit(12000,13000,150000,5));
function addition1(num1, num2, num3) {
    if (num1 === void 0) { num1 = 10; }
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2 + num3; //since undefined replaced by 20 in 2nd parameter
}
console.log(addition1(10, undefined, 100)); // here we dont have to pass second parameter and dont want to take default arguments , put undefined before compulsory parameters num3
//# sourceMappingURL=function-default-parameter-value.js.map
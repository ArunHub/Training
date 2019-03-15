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

function syneSalesNetProfit(cogs:number, expense: number, actualSales: number, gstPercent: number = cogs*18):number { // using same parameter variable in last parameter
    let gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}

// console.log(syneSalesNetProfit(12000,13000,150000));
// console.log(syneSalesNetProfit(12000,13000,150000,5));

function addition1(num1: number = 10, num2: number = 20, num3:number):number{ // default parameter can be at first parameter
return num1+num2+num3; //since undefined replaced by 20 in 2nd parameter
}

console.log(addition1(10,undefined,100)); // here we dont have to pass second parameter and dont want to take default arguments , put undefined before compulsory parameters num3
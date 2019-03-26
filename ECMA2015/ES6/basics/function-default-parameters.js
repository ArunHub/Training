let taxPercent = 5;
let GovtTaxObject = {
    import: 35,
    export: 10
}
function getTaxPercentage(state) {
    if (state === "MH") {
        return 14;
    }
    return 13;
}


function salesNetProfit(cogs, expense = 10000, actualSales, taxPercentage = cogs * .0027) {
    let taxAmount = actualSales * taxPercentage / 100;
    return actualSales - (cogs + expense + taxAmount);
}

console.log(`Sales Net Profit without Tax - INR ${salesNetProfit(12000, 13000, 150000)}/-`);

console.log(`Sales Net Profit with 12% Tax - INR ${salesNetProfit(12000, 13000, 150000, 12)}/-`);

console.log(`Sales Net Profit without Tax - INR ${salesNetProfit(12000, undefined, 150000, 20)}/-`);

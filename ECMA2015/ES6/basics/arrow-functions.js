const Customer = {
    customerId: 4783,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    // getCustomerInformation: function () {
    //     let _self = this;
    //     setTimeout(function () {
    //         console.log(`Customer Id is ${_self.customerId}, Name is ${_self.contactName} who lives in city ${_self.city}`);
    //     }, 2000);
    // },
    // getCustomerInformation: function () {
    //     setTimeout(function () {
    //         console.log(`Customer Id is ${this.customerId}, Name is ${this.contactName} who lives in city ${this.city}`);
    //     }.bind(this), 2000);
    // }
    getCustomerInformation: function () {
        setTimeout(() => {
            console.log(`Customer Id is ${this.customerId}, Name is ${this.contactName} who lives in city ${this.city}`);
        }, 2000);
    }
}

Customer.getCustomerInformation();

(() => console.log("Welcome To Synechron!"))();

let msg1 = () => console.log("Welcome To Synechron!");
msg1();
let msg2 = by => `Message is from ${by}`;
console.log(msg2("Synechron HR"));

let salesNetProfit = (cogs, expense, actualSales, taxPercentage = 18) => {
    let taxAmount = actualSales * taxPercentage / 100;
    return actualSales - (cogs + expense + taxAmount);
}
console.log(`Sales Net Profit without tax is ${salesNetProfit(12000, 13000, 150000)}`);
console.log(`Sales Net Profit with 12% tax is ${salesNetProfit(12000, 13000, 150000, 12)}`);
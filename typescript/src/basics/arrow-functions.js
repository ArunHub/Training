var MsCustomer = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        setTimeout(function () {
            console.log("\n            customer id: " + this.custId + "\n            customer name: " + this.contactName + "\n            customer city: " + this.city + "\n            ");
        }, 2000);
    }
};
//MsCustomer.printCustMess(); //undefined
// solution 1 by self local variable
var MsCustomer1 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        var _self = this;
        setTimeout(function () {
            console.log(" by self local variable\n            customer id: " + _self.custId + "\n            customer name: " + _self.contactName + "\n            customer city: " + _self.city + "\n            ");
        }, 2000);
    }
};
// MsCustomer1.printCustMess();
// solution 2 by bind call execution
var MsCustomer2 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        var _self = this;
        setTimeout(function () {
            console.log(" by bind method\n            customer id: " + _self.custId + "\n            customer name: " + _self.contactName + "\n            customer city: " + _self.city + "\n            ");
        }.bind(this), 1000);
    }
};
// MsCustomer2.printCustMess();
// solution 3 by arrow functions
var MsCustomer3 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        var _this = this;
        setTimeout(function () {
            console.log(" by arrow functions\n            customer id: " + _this.custId + "\n            customer name: " + _this.contactName + "\n            customer city: " + _this.city + "\n            ");
        }, 1000);
    }
};
// MsCustomer3.printCustMess();
var arrow1 = function () { return console.log("this is a simple arrow function"); };
arrow1();
var arrow2 = function () { return "welcome to arrow shirts"; };
console.log(arrow2());
var arrow3 = function (no1) { return no1 + 100 / 2; };
console.log(arrow3(3));
var salesNetProfit = function (cogs, expense, actualSales, gstPercentage) {
    var gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
};
console.log(salesNetProfit(12000, 13000, 150000, 10));
//# sourceMappingURL=arrow-functions.js.map
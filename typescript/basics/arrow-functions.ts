const MsCustomer = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        setTimeout(function() {
            console.log(`
            customer id: ${this.custId}
            customer name: ${this.contactName}
            customer city: ${this.city}
            `);  
            
        }, 2000);
    }
}

//MsCustomer.printCustMess(); //undefined


// solution 1 by self local variable
const MsCustomer1 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        let _self = this;
        setTimeout(function() {
            console.log(` by self local variable
            customer id: ${_self.custId}
            customer name: ${_self.contactName}
            customer city: ${_self.city}
            `);  
            
        }, 2000);
    }
}

// MsCustomer1.printCustMess();

// solution 2 by bind call execution
const MsCustomer2 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        let _self = this;
        setTimeout(function() {
            console.log(` by bind method
            customer id: ${_self.custId}
            customer name: ${_self.contactName}
            customer city: ${_self.city}
            `);  
            
        }.bind(this), 1000);
    }
}

// MsCustomer2.printCustMess();

// solution 3 by arrow functions
const MsCustomer3 = {
    custId: 4567,
    contactName: "Pravin Kumar R. D",
    city: "pune",
    printCustMess: function () {
        setTimeout(() => {
            console.log(` by arrow functions
            customer id: ${this.custId}
            customer name: ${this.contactName}
            customer city: ${this.city}
            `);  
            
        }, 1000);
    }
}

// MsCustomer3.printCustMess();

let arrow1 = () => console.log("this is a simple arrow function");
arrow1();
let arrow2 = () => "welcome to arrow shirts";
console.log(arrow2());
let arrow3 = no1 => no1 + 100/2;
console.log(arrow3(3));

let salesNetProfit = (cogs: number, expense: number, actualSales: number, gstPercentage: number): number => {
    let gstAmount: number = actualSales * gstPercentage/100;
    return actualSales - (cogs + expense + gstAmount);
}

console.log(salesNetProfit(12000,13000,150000,10));

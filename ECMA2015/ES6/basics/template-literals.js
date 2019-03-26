const Customer = {
    customerId: 2399,
    contactName: "Pravinkumar R. D.",
    city: "Pune"
}
//Customer Id is 2399, Contact Name is Pravinkumar R. D. who lives in city Pune

//console.log("Customer Id is %s Contact Name is %s who lives in city %s",Customer.customerId,Customer.contactName,Customer.city);

console.log(`Customer Id is ${Customer.customerId}
Contact Name is ${Customer.contactName}
who lives in city ${Customer.city}`);

function getCustomerInformation() {
    //return "Customer Id is %s Contact Name is %s who lives in city %s",Customer.customerId,Customer.contactName,Customer.city;
    return `Customer Id is ${Customer.customerId}, Contact Name is ${Customer.contactName} who lives in city ${Customer.city}`;
}
console.log(`${getCustomerInformation()}`);
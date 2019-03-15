const Customer = {
    custId: 456,
    name: 'manish',
    city: 'raipur'
}

console.log('customer id is '+Customer.custId+ ', contact name is '+Customer.name+'live in city: '+ Customer.city); 

console.log('customer id is %s , contact name is %s live in city: ', Customer.custId, Customer.name, Customer.city); // this one does not work in return statement

console.log(`customer id is ${Customer.custId} , contact name is ${Customer.name} live in city:  ${Customer.city}`); // multi string literal with back ticks

console.log(`
customer id is ${Customer.custId},
contact name is ${Customer.name} 
live in city:  ${Customer.city}
`); //multi line string without using /n


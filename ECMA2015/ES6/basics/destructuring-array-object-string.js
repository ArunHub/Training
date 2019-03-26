const mobiles = ["Samsung Galaxy J8", "Micromax Canvas 5", "Apple X Next"];
//Array Destructuring
var [mobi1, mobi2, mobi3] = mobiles;
console.log(mobi2);

var [mobi1, , mobi3] = mobiles;
console.log(mobi3);

var [mobi1, ...others] = mobiles;
console.log(others);

//Object Destructuring
let Order = {
    orderId: 2839,
    shippingAddress: "Suncity, A8/404",
    city: "Pune"
}

var { orderId: oId, shippingAddress: shipAddress, city: city } = Order;
console.log(shipAddress);

var shpAddr, ordNum, shipCity;
({ orderId: ordNum, shippingAddress: shpAddr, city: shipCity } = Order);
console.log(`${shpAddr} ${shipCity} ${ordNum}`);

let [letter1, letter26] = "AZ";
console.log(`${letter1} - ${letter26}`);
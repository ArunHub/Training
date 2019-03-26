//console.log(PI);
const PI = 3.14;
{
    const PI = 3.142345;
}

//Array/Object Contents are not const
const cities = ["Bangalore", "Chennai", "Delhi"];
cities[0] = "Pune";
console.log(cities.length);
//cities = [];
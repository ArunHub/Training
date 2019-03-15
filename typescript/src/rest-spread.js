//REST parameter
function printCities() {
    var cities = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cities[_i] = arguments[_i];
    }
    for (var _a = 0, cities_1 = cities; _a < cities_1.length; _a++) {
        var city = cities_1[_a];
        console.log(city);
    }
}
printCities('blr', 'cjemmao', 'pune');
// rest do the packing the comma seperated and pass to function
//spread operator
var travellingCity = ['blr1', 'cjemmao1', 'pune1'];
printCities.apply(void 0, travellingCity);
// spread operator unpacks the ...variable and spread each one of the value from package and seperate it with commas
//# sourceMappingURL=rest-spread.js.map
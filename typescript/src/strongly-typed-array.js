var offices = ['bangalore', 'chennai', 'mumbai', 'pune'];
for (var index = 0; index < offices.length; index++) {
    console.log(offices[index]);
    // if (offices[index]==="mumbai") {
    //     break;
    // }
}
// offices.forEach(function (VAL) { //break doesnt work on foreach like forloop but see in below example
//     console.log(VAL)
//     if (VAL==="mumbai") {
//         break;
//     }
// })
for (var _i = 0, offices_1 = offices; _i < offices_1.length; _i++) {
    var city = offices_1[_i];
    if (city === 'mumbai') {
        break;
    }
    console.log(city);
}
//# sourceMappingURL=strongly-typed-array.js.map
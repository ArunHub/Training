const synechronOffices = ["Bangalore", "Chennai", "Hyderabad", "Mumbai", "Pune"];

// for(var i=0;i<synechronOffices.length;i++){
//     console.log(synechronOffices[i]);
// }
// console.log("");
// synechronOffices.forEach(function(city){
//     console.log(city);
// });

//Iterator - to loop through the array elements/object properties
for (const city of synechronOffices) {
    if (city == "Mumbai") {
        break;
    }
    console.log(city)
}
const offices:string[] = ['bangalore','chennai','mumbai','pune'];

for (let index = 0; index < offices.length; index++) {
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

for (const city of offices) {
    if (city === 'mumbai') {
        break;
    }
    console.log(city)
}
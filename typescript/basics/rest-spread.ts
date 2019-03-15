//REST parameter
function printCities(...cities: string[]): void{
    for (const city of cities) {
        console.log(city);
        
    }
}

printCities('blr','cjemmao', 'pune');
// rest do the packing the comma seperated and pass to function


//spread operator
const travellingCity: Array<string> = ['blr1','cjemmao1', 'pune1']

printCities(...travellingCity);
// spread operator unpacks the ...variable and spread each one of the value from package and seperate it with commas
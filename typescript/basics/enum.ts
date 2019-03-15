//set of named constants

enum Menu {
    VEG, NONVEG, JAPANESE, ITALIAN
}

let myFoodChoice: Menu = Menu.ITALIAN;
console.log(myFoodChoice); //output-3 //numeric constants since no positions


enum Menu1 {
    VEG = 1, NONVEG, JAPANESE, ITALIAN
}

let myFoodChoice1: Menu = Menu.ITALIAN;
console.log(myFoodChoice1); // 4

switch (myFoodChoice1) {
    case 1:
    console.log('veg food');
        
        break;

        case 2:
        console.log('non veg food');
        break;
        case 3:
        console.log('japanese food');
        
        break;

        case 4:
        console.log('italina food');
        
        break;

    default:
    console.log('no food');
    break;
}
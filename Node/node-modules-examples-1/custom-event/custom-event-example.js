const events = require('events');

const travellingEvent = new events.EventEmitter();
travellingEvent.on('packbag', (duration) => {
    switch (duration) {
        case 3:
            console.log("small back with 3pairs of clothes");
            break;
    
        default:
            console.log('big back with number of 5 pairs of clothes');
            break;
    }
})

travellingEvent.once('flightbooking', (preference)=>{
    console.log(`My flight preference is ${preference}!`);    
})

travellingEvent.off();
travellingEvent.emit('packbag', 3);
travellingEvent.emit('packbag', 13);
travellingEvent.emit('packbag', 20);

travellingEvent.emit('flightbooking', 'Jet Airways');
travellingEvent.emit('flightbooking', 'King Fisher');
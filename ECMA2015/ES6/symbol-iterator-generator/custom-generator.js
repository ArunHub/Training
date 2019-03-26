function* getNextNumber() {
    yield 1000;
    yield 1001;
    yield 1002;
}

let number = getNextNumber();
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

// for (const num of getNextNumber()) {
//     console.log(num);
// }

function* getNextSlot(startNumber) {
    let endNumber = startNumber + 99;
    while (startNumber <= endNumber) {
        yield (startNumber++);
    }
}

for (const slot1 of getNextSlot(100)) {
    console.log(slot1);
}
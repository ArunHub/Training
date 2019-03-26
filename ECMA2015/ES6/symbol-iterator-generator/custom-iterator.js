const numbers = [100, 200, 300];

//console.log(typeof numbers[Symbol.iterator]);
// let nextNum = numbers[Symbol.iterator]();
// console.log(nextNum.next());
// console.log(nextNum.next());
// console.log(nextNum.next());
// console.log(nextNum.next());

let autoNumberIterator = {
    [Symbol.iterator]() {
        let initialNumber = 1;
        return {
            next() {
                let value = initialNumber > 100 ? undefined : initialNumber++;
                let done = !value;
                return {
                    value,
                    done
                }
            }
        }
    }
}

let myNumbers = autoNumberIterator[Symbol.iterator]();
// console.log(myNumbers.next());
// console.log(myNumbers.next());

for (const number of autoNumberIterator) {
    console.log(number);
}
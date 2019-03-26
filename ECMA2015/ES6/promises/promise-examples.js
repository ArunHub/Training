function pickupYourFriend() {
    console.log("Call from friend at 8:00! He/She will reach at 9:30 to pickup point!");
    let friendPromise = new Promise((resolve, reject) => {
        setTimeout(function () {
            //resolve("Picked up the friend!");
            reject("I got stuck in traffic");
        }, 2000);
    });
    return friendPromise;
}

// let finalMessage = pickupYourFriend();
// finalMessage.then(
//     value => console.log(value),
//     reason => console.log(reason)
// );
//console.log("End of my File!");

const synechronOffices = ["Bangalore", "Chennai", "Hyderabad", "Mumbai"];

function sendMessageToOffices() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (synechronOffices.length > 4) {
                resolve(synechronOffices);
            }
            else {
                reject("Did not receive enough offices count");
            }
        }, 2000);
    });
}

// let shouldSendMessage = sendMessageToOffices();
// shouldSendMessage.then(
//     offices => offices,
//     reason => reason
// ).then(
//     receivedOffices => {
//         for (const office of receivedOffices) {
//             if (office !== "Mumbai") {
//                 console.log(office);
//             }
//         }
//     },
//     reason => console.log(reason)
// );

let task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 Completed!");
    }, 1000);
});
let task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task 2 InComplet!");
    }, 2000);
});
let task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 Completed!");
    }, 1000);
});

Promise.all([task1, task2, task3]).then(
    values => console.log(values),
    reasons => console.log(reasons)
);
// Promise.race([task1, task2, task3]).then(
//     values => console.log(values),
//     reasons => console.log(reasons)
// );
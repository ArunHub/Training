const readline = require('readline');
const taskObj = require('./tasks-api');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getTasks = taskObj.fetchAllTasks();
getTasks.then((tasks) => {
        tasks.forEach(t => {
            console.log(t.id + ". " + t.taskname + " - " + t.count);
        })
    },
    (err) => {
        console.error('errorrrrrrrrrrrrrrr', err)
    });

// function findId(id) {
//     var found = taskList.findIndex(t => {
//         console.log('ttttt', t)
//         return t.id === parseInt(id) }
//         )!== -1;
//     console.log("text", found);
//     return found;
// }

function askQns() {
    rl.question('\nWhat did you completed today from the list? \nType only numbers. If multiple, put commas. Ex:1 or 1,2,3\n', (answer) => {
        var pattern = /[0-9,]+/g;

        const regex = new RegExp(pattern);

        if (regex.test(answer)) {
            console.log('adsf',answer)
            console.log('type ', typeof answer)
            answer = answer.split(',').map(t=>Number.parseInt(t, 10));
            taskObj.fetchSingleTask(answer).then(task => {
                taskObj.fetchModifyTask(answer, task.count).then(res => {
                    console.log('successfully modified-', res);
                    rl.close();
                })
            });
        } else {
            console.log('Invalid pattern / Not match found in list')
            askQns();
        }
    });
}

askQns();
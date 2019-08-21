var mongojs = require('mongojs');
var db = mongojs('local', ['dailytask']);

class Event {
    constructor() {

    }
    fetchAllTasks() {
        return new Promise((resolve, reject) => {
            db.dailytask.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
    fetchSingleTask(id) {
        return new Promise((resolve, reject) => {
            db.dailytask.findOne({ id: Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(doc);
                }
            });
        })
    }
    fetchModifyTask(id, count) {
        return new Promise((resolve, reject) => {
            try {
                db.dailytask.update({ id: Number.parseInt(id)}, {$set:{count: count+1}}, (err, doc) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(doc);
                    }
                });
             } catch (e) {
                console.error('xxxxxxxxxxxx',e);
             }
       
        })
    }
    insertTasks(task) {
        let modifiedTask = {
            ...task,
            eventId: Number.parseInt(event.eventId),
            fees: Number.parseInt(event.fees),
            seatsFilled: Number.parseInt(event.seatsFilled)
        }
        let promise = new Promise((resolve, reject) => {
            db.dailytask.insert(modifiedEvent, (err) => {
                if (err) {
                    reject(err);
                }
                resolve('Insertion Successfully!');
            });

        });
        return promise;
    }
}
module.exports = new Event();
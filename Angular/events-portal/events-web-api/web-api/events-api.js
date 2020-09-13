var mongojs = require('mongojs');
var db = mongojs('synechron-events-db', ['events']);

class Event {
    constructor() {

    }
    fetchAllEvents() {
        return new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
    fetchSingleEvent(id) {
        return new Promise((resolve, reject) => {
            db.events.findOne({ eventId: Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(doc);
                }
            });
        })
    }
    insertEvents(event) {
        let modifiedEvent = {
            ...event,
            eventId: Number.parseInt(event.eventId),
            fees: Number.parseInt(event.fees),
            seatsFilled: Number.parseInt(event.seatsFilled)
        }
        let promise = new Promise((resolve, reject) => {
            db.events.insert(modifiedEvent, (err) => {
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
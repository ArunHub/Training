const mongojs = require("mongojs");
const db = mongojs("synechron-events-db", ["events"]);

class EventsDal {
    getAllEvents() {
        return new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            });
        });

    }
    getSingleEvent(id) {
        return new Promise((resolve, reject) => {
            db.events.findOne({ "eventId": Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
    insertNewEvent(event) {
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

module.exports = new EventsDal();
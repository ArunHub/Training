const mongojs = require("mongojs");
const db = mongojs("events-portal", ["events"]);

class EventsDal {
    constructor() {

    }
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
            db.events.findOne({ eventId: Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
    insertNewEvent(event) {
        let newEvent = {
            ...event,
            eventId: Number.parseInt(event.eventId),
            fees: Number.parseInt(event.fees),
            seatsFilled: Number.parseInt(event.seatsFilled),
        }
        return new Promise((resolve, reject) => {
            db.events.insert(newEvent, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
}

module.exports = new EventsDal();
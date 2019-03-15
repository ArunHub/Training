const mongojs = require('mongojs');
const db = mongojs('events-portal', ['events', 'users']);

class EventsDal {
    constructor() {

    }

    getAllEvents() { 
        console.log('getAllEvents')
        return new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                
                if (err) {
                    reject(err);
                }
                
                resolve(docs);
            })
        })
    } 
    getSingleEvent(id) {
        return new Promise((resolve, reject) => {
            
            db.events.findOne({ 'eventId': Number.parseInt(id) }, (err, docs) => {
                if (err) {
                    reject(err);
                }
                console.log('xxxxxxxxxxxx', docs)
                resolve(docs);
            })
        })
    }
    insertNewEvent(event) {
        let newEvent = {
            ...event,
            eventId: Number.parseInt(event.eventId),
            fees: Number.parseInt(event.fess),
            seatsFilled: Number.parseInt(event.seatsFilled),
        }
        return new Promise((resolve, reject) => {
            db.events.insert(newEvent, (err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            })
        })
    }
    updateEvent(doc) {
        return new Promise((resolve, reject) => {
            db.events.insert(doc, (err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            })
        })
    }
}

module.exports = new EventsDal();
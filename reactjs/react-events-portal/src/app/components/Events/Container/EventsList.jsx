import React, { Component } from 'react'
import EventDetails from './EventDetails';

export default class EventsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            eventId: null
        }
    }
    componentDidMount() {
        this.getEventsListfromDb().then(
            data => data.json(),
            reason => reason
        ).then(
            eventsData => this.setState(
                {
                    events: eventsData
                }
            ),
            reason => console.log(reason)
        )
        // this.setState({
        //     events: this.getEventsList()
        // })
    }
    onEventClick(id) {
        this.setState({
            eventId: id
        }, () => {
            console.log(this.state.eventId, 'eventsssssssssss')
        })
    }

    onNavigation(id){
        this.props.history.push('/events/'+id);
    }
    getEventsListfromDb() {
        return fetch("http://localhost:9091/api/events")
    }
    getEventsList() {
        return [
            {
                eventId: 1001,
                eventCode: 'SEMJQ3',
                eventName: 'Seminar on jQuery 3.x',
                description: 'Seminar will discuss all the new features of jQuery 3.x',
                startDate: new Date(),
                endDate: new Date(),
                fees: 800,
                seatsFilled: 70,
                logo: 'images/jq3.png'
            },
            {
                eventId: 1002,
                eventCode: 'SEMNG1',
                eventName: 'Seminar on Angular JS 1.5.x',
                description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
                startDate: new Date(),
                endDate: new Date(),
                fees: 600,
                seatsFilled: 50,
                logo: 'images/ng1.png'
            },
            {
                eventId: 1003,
                eventCode: 'SEMNG2',
                eventName: 'Seminar on Angular 2.x',
                description: 'Seminar will discuss all the new features of Angular 2.x',
                startDate: new Date(),
                endDate: new Date(),
                fees: 1000,
                seatsFilled: 80,
                logo: 'images/ng2.png'
            },
            {
                eventId: 1004,
                eventCode: 'SEMNG4',
                eventName: 'Seminar on Angular 4.x',
                description: 'Seminar will discuss all the new features of Angular 4.x',
                startDate: new Date(),
                endDate: new Date(),
                fees: 1000,
                seatsFilled: 76,
                logo: 'images/ng2.png'
            },
            {
                eventId: 1005,
                eventCode: 'SEMBS3',
                eventName: 'Seminar on Bootstrap 3.x',
                description: 'Seminar will discuss all the new features of Bootstrap 3.x',
                startDate: new Date(),
                endDate: new Date(),
                fees: 500,
                seatsFilled: 34,
                logo: 'images/bs3.png'
            }
        ];
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>event code</th>
                            <th>event name</th>
                            <th>startdate</th>
                            <th>fees</th>
                            <th>show details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.events.map((event, idx) =>
                                <tr key={idx}>
                                    <td>{event.eventCode}</td>
                                    <td>{event.evntName}</td>
                                    <td>{
                                        // new Intl.DateTimeFormat("es-ES", {
                                        //     year: "numeric",
                                        //     month: "long",
                                        //     day: "2-digit"
                                        // }).format(Date.parse(event.startDate))  
                                        event.startDate                                      
                                    }</td>
                                    <td>{
                                        // new Intl.NumberFormat("en-es", {
                                        //     style: "currency",
                                        //     currency: "EUR",
                                        //     maximumFractionDigits: 2,
                                        //     minimumFractionDigits: true
                                        // }).format(event.fees)
                                        event.fees
                                    }</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={
                                            // () => this.onEventClick(event.eventId)
                                            () => this.onNavigation(event.eventId)
                                        }>Show details</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* {

                    (this.state.eventId !== null) ?

                        <div className="container">
                            <EventDetails id={this.state.eventId} />
                        </div>
                        : null

                } */}
                }
            </div>
        )
    }
}

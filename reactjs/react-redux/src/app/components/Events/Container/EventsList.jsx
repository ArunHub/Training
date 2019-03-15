import React, { Component } from 'react'
import propTypes from "prop-types";
import { connect } from "react-redux";

import { getAllEvents } from "./../../../actions/events-actions";

class EventsList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllEvents();
    }
    onNavigation(id) {
        console.log('id',id)
        this.props.history.push('/events/' + id);
    }
    render() {
        console.log('')
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
                            this.props.events.map((event, idx) =>
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
                                            () => this.onNavigation(event.eventId)
                                        }>Show details</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

EventsList.propTypes = {
    getAllEvents: propTypes.func.isRequired,
    events: propTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    events: state.eventsReducer.items
})

export default connect(mapStateToProps, { getAllEvents })(EventsList)
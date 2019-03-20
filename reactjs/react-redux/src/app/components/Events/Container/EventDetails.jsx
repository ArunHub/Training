import React, { Component } from 'react'
import { connect } from "react-redux";
import propTypes from "prop-types";

import { getSingleEvent } from "../../../actions/events-actions";

class EventDetails extends Component {
    constructor(props) {
        super(props)    
    }
    componentDidMount() {
        this.props.getSingleEvent(this.props.match.params.id)
    }
    render() {

        return (
            <div>
               {(this.props.event !== null) ? <h1>Details of {this.props.event.eventName}</h1> : null}
                {
                    (this.props.event !== null) ?                    
                        <table className="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>Event Id</th>
                                    <td><span>{this.props.event.eventId}</span></td>
                                </tr>
                                <tr>
                                    <th>Event Code</th>
                                    <td><span>{this.props.event.eventCode}</span></td>
                                </tr>
                                <tr>
                                    <th>Event Name</th>
                                    <td><span>{this.props.event.eventName}</span></td>
                                </tr>
                                <tr>
                                    <th>Start Date</th>
                                    <td><span>{
                                        new Intl.DateTimeFormat("en-es", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(Date.parse(this.props.event.startDate))
                                    }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>End date</th>
                                    <td><span>{
                                        new Intl.DateTimeFormat("en-es", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(Date.parse(this.props.event.endDate))
                                    }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Fees</th>
                                    <td><span>
                                        {
                                            new Intl.NumberFormat("en-es", {
                                                style: "currency",
                                                currency: "EUR",
                                                maximumFractionDigits: 2,
                                                minimumFractionDigits: true
                                            }).format(this.props.event.fees)
                                        }
                                    </span></td>
                                </tr>
                                <tr>
                                    <th>description</th>
                                    <td><span>{this.props.event.description}</span></td>
                                </tr>
                                <tr>
                                    <th>Seats filled</th>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" title={this.props.event.seatsFilled + "%"} style={{ width: this.props.event.seatsFilled + "%" }}>{this.props.event.seatsFilled + "%"}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>logo</th>
                                    {/* <td><img src={'../' + this.props.event.logo} alt={this.props.event.logo} /></td> */}
                                </tr>
                            </tbody>
                        </table>
                        : null}
            </div>
        )
    }
}

EventDetails.propTypes = {
    getSingleEvent: propTypes.func.isRequired,
    event: propTypes.object
}

const mapStateToProps = (state) => ({
    event: state.eventsReducer.item
})

export default connect(mapStateToProps, {getSingleEvent})(EventDetails);
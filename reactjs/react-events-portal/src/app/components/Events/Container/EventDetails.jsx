import React, { Component } from 'react'

export default class EventDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: null
        }
    }
    componentDidMount() {
        this.updateComponent()
    }
    // componentDidUpdate(prevProps, prevState){
    //     
    //     if (this.props.id !== prevProps.id) {
    //         this.updateComponent();
    //     }
    // }
    updateComponent() {
        this.getSingleEvent()
            .then(
                response => response.json(),
                reason => reason
            ).then(
                singleEvent => this.setState(
                    {
                        event: singleEvent
                    }
                )
            )
    }
    getSingleEvent() {
        return fetch(`http://localhost:9091/api/events/${this.props.match.params.id}`);
    }
    render() {

        return (
            <div>
                {
                    (this.state.event !== null) ?
                        <table className="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <th>Event Id</th>
                                    <td><span>{this.state.event.eventId}</span></td>
                                </tr>
                                <tr>
                                    <th>Event Code</th>
                                    <td><span>{this.state.event.eventCode}</span></td>
                                </tr>
                                <tr>
                                    <th>Event Name</th>
                                    <td><span>{this.state.event.eventName}</span></td>
                                </tr>
                                <tr>
                                    <th>Start Date</th>
                                    <td><span>{
                                        // new Intl.DateTimeFormat("es-ES", {
                                        //     year: "numeric",
                                        //     month: "long",
                                        //     day: "2-digit"
                                        // }).format(Date.parse(this.state.event.startDate))
                                        this.state.event.startDate
                                    }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>End date</th>
                                    <td><span>{
                                        // new Intl.DateTimeFormat("es-ES", {
                                        //     year: "numeric",
                                        //     month: "long",
                                        //     day: "2-digit"
                                        // }).format(Date.parse(this.state.event.endDate))
                                        this.state.event.endDate
                                    }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Fees</th>
                                    <td><span>
                                        {
                                            // new Intl.NumberFormat("en-es", {
                                            //     style: "currency",
                                            //     currency: "EUR",
                                            //     maximumFractionDigits: 2,
                                            //     minimumFractionDigits: true
                                            // }).format(this.state.event.fees)
                                            this.state.event.fees
                                        }
                                    </span></td>
                                </tr>
                                <tr>
                                    <th>description</th>
                                    <td><span>{this.state.event.description}</span></td>
                                </tr>
                                <tr>
                                    <th>Seats filled</th>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" title={this.state.event.seatsFilled + "%"} style={{ width: this.state.event.seatsFilled + "%" }}>{this.state.event.seatsFilled + "%"}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>logo</th>
                                    {/* <td><img src={'../' + this.state.event.logo} alt={this.state.event.logo} /></td> */}
                                </tr>
                            </tbody>
                        </table>
                        : null}
            </div>
        )
    }
}

import React, { Component } from 'react'
import propTypes from "prop-types";
import { connect } from "react-redux";

const withListHOC = (WrappedComponent, data) => {
    const method = data[method];
    // import { method } from "./../../actions/events-actions";

    class NewComponent extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            this.props.method();
        }
        onNavigation(id) {
            this.props.history.push('/events/' + id);
        }
        render() {
            return (
                <div>
                    <h1>{data[title]}</h1>
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
                                        <td>{event.eventName}</td>
                                        <td>{
                                            new Intl.DateTimeFormat("en-EN", {
                                                year: "numeric",
                                                month: "long",
                                                day: "2-digit"
                                            }).format(Date.parse(event.startDate))
                                        }</td>
                                        <td>{
                                            new Intl.NumberFormat("en-es", {
                                                style: "currency",
                                                currency: "EUR",
                                                maximumFractionDigits: 2,
                                                minimumFractionDigits: true
                                            }).format(event.fees)
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
    
    NewComponent.propTypes = {
        method: propTypes.func.isRequired,
        events: propTypes.array.isRequired
    }
    
    const mapStateToProps = (state) => ({
        events: state.eventsReducer.items
    })
    
    connect(mapStateToProps, { method })(NewComponent)
    return NewComponent;
}

export default withListHOC;


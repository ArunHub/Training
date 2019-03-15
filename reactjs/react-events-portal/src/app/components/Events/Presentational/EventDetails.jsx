import React from 'react'

export default function EventDetails(props) {
    return (
        <div>
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>Event Id</th>
                        <td><span>{props.event.eventId}</span></td>
                    </tr>
                    <tr>
                        <th>Event Code</th>
                        <td><span>{props.event.eventCode}</span></td>
                    </tr>
                    <tr>
                        <th>Event Name</th>
                        <td><span>{props.event.eventName}</span></td>
                    </tr>
                    <tr>
                        <th>Start Date</th>
                        <td><span>{
                            new Intl.DateTimeFormat("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                            }).format(Date.parse(props.event.startDate))}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>End date</th>
                        <td><span>{
                            new Intl.DateTimeFormat("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "2-digit"
                            }).format(Date.parse(props.event.endDate))}</span>
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
                                }).format(props.event.fees)
                            }
                        </span></td>
                    </tr>
                    <tr>
                        <th>description</th>
                        <td><span>{props.event.description}</span></td>
                    </tr>
                    <tr>
                        <th>Seats filled</th>
                        <td>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" title={props.event.seatsFilled + "%"} style={{ width: props.event.seatsFilled + "%" }}>{props.event.seatsFilled + "%"}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>logo</th>
                        <td><img src={'../'+props.event.logo} alt={props.event.logo} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

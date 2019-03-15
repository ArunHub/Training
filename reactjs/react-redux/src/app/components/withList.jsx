import React, { Component } from 'react'

const withList = (WrapperComponent, dataSource) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                [dataSource.lists]: [],
                [dataSource.listId]: null
            }
        }g
        componentDidMount() {
            this.getFromDb().then(
                data => data.json(),
                reason => reason
            ).then(
                returnData => this.setState({
                    [dataSource.lists]: returnData
                }),
                reason => console.log(reason)
            )
        }
        onEventClick(id) {
            this.setState({
                [dataSource.listId]: id
            }, () => {
                console.log(this.state[dataSource.listId], 'eventsssssssssss')
            })
        }

        onNavigation(id) {
            this.props.history.push('/events/' + id);
        }
        getFromDb() {
            return fetch(dataSource.url)
        }
        render() {
            return (
                <div>
                    <WrapperComponent {...this.props}/>
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
                            this.state[dataSource.lists].map((list, idx) =>
                                <tr key={idx}>
                                    <td>{list.eventCode}</td>
                                    <td>{list.evntName}</td>
                                    <td>{list.startDate}</td>
                                    <td>{list.fees}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={
                                            // () => this.onEventClick(event.eventId)
                                            () => this.onNavigation(list.eventId)
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

    return NewComponent;

}

export default withList;
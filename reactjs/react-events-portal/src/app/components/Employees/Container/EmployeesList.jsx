import React, { Component } from "react";

export default class EmployeesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    xcomponentDidMount() {
        let newresults = [{ director: "george" }, { director: "lucs" }, { director: "arun" }, { director: "george lucs" }]
        this.setState((state, props) => {
            return {
                results: [...state.results, newresults]
            }
        })
    }

    render() {

        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employees.map((val, idx) =>
                                <tr key={idx}>
                                    <td>{val.employeeName}</td>
                                    <td>{val.employeeId}</td>
                                    <td>{val.email}</td>
                                    <td>{val.phone}</td>
                                    <td>{val.city}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
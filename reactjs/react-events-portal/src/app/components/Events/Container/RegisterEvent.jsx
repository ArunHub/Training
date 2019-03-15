import React, { Component } from 'react'

export default class RegisterEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventId: 0,
            eventCode: "",
            eventName: "",
            description: "",
            startDate: new Date("yyyy-MM-dd"),
            endDate: new Date("yyyy-MM-dd"),
            fees: 0,
            seatsFilled: 0,
            logo: 'images/noimage.png'
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEventSubmit(e){
        e.preventDefault();
        console.log(this.state);
        fetch(`http://localhost:9091/api/events`, {
            method: 'POST',
            headers: new Headers({
                "content-type": "application/json",
            }),
            body: JSON.stringify(this.state)
        }).then(
            response => response.json(),
            reason => reason
        ).then(
            doc => console.log(doc),
            reason => console.log(reason)
        )
    }

    render() {
        return (
            <div className="">
                <div class="form-group">
                    <label htmlFor="eventId">Event Id</label>
                    <input type="number" className="form-control" name="eventId" id="eventId" placeholder="Enter Event Id" required value={this.state.eventId} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="eventCode">Event Code</label>
                    <input type="text" className="form-control" name="eventCode" id="eventCode" placeholder="Enter Event code" required value={this.state.eventCode} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <input type="text" className="form-control" name="eventName" id="eventName" placeholder="Enter Event code" required value={this.state.eventName} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="description">description</label>
                    <input type="text" className="form-control" name="description" id="description" placeholder="Enter description" required value={this.state.description} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="fees">fees</label>
                    <input type="number" className="form-control" name="fees" id="fees" placeholder="Enter fees" required value={this.state.fees} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="seatsFilled">seats filled</label>
                    <input type="number" className="form-control" name="seatsFilled" id="seatsFilled" placeholder="Enter seats filled" required value={this.state.seatsFilled} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="startdate">Start Date</label>
                    <input type="date" className="form-control" name="startDate" id="startdate" placeholder="Enter Start Date" required value={this.state.startDate} onChange={e=> this.onChange(e)}/>
                </div>
                <div class="form-group">
                    <label htmlFor="enddate">end date</label>
                    <input type="date" className="form-control" name="endDate" id="enddate" placeholder="Enter end date" required value={this.state.endDate} onChange={e=> this.onChange(e)}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={(e)=>this.onEventSubmit(e)}>Submit</button>
            </div>
        )
    }
}

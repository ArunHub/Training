import React, { Component } from "react";

export default class HrMessage extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1 style={{color:'pink'}}>Welcome HR Department</h1>
                <h4>Message updated on - {new Date().toDateString()}</h4>
            </div>
        )
    }
}
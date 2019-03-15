import React, { Component } from "react";
import "./SecurityMessage.css";

const SecurityMessage = () => {
    const style = {
        color: 'orange'
    }
    return (        
        <div>   
            <h1 className="title">Welcome Security Department</h1>
            <h4 style={{color: 'red'}}>Message updated on - {new Date().toDateString()}</h4>
        </div>
    )
}

export default SecurityMessage;
import React, { Component } from "react";

import SecurityMessage from "./components/SecurityMessage";
import HrMessage from "./components/HrMessage";

export default class RootComponent extends Component{

    render(){
        return (
            <div>
                <HrMessage />
                <SecurityMessage />
            </div>
        )
    }
}
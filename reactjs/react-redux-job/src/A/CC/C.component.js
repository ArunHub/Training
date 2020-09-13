import React, { Component } from 'react';
//import EE from './EE/E.component';
import FF from './FF/F.component';

class CC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateVal : ""
        }
    }

    render() {
let EE = require("./EE/E.component").EE || require("./EE/E.component").default;

        return (
            <div>Welcome CCC
            <div>Child component - objtent = [{this.props?this.props.passedVal:null}]</div>
            
            
            <button>hello sir</button><EE></EE><FF></FF>
            </div>
        );
    }
}


export default CC;
window['CC'] = CC;
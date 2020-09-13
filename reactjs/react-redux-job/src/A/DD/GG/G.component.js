import React, { Component } from 'react';

class GG extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateVal : ""
        }
    }

    render() {
        return (
            <div className="machi"  >Welcome F</div>
        );
    }
}

export default GG;
window.GG = GG;
import React, { Component } from 'react';
import GG from '../../DD/GG/G.component';

class FF extends Component {

    componentDidMount() {
        console.log('childdd')
    }

    render() {
        return (
            <div>
                <GG/>
            </div>
        );
    }
}

export default FF;
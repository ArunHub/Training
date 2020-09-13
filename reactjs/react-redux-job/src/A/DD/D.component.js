import React from 'react';
import GG from './GG/G.component';
import {X} from '../../X.component';

class DD extends X {

    constructor(props) {
        super(props);

        this.state = {
            stateVal : ""
        }
    }
    test() {
        console.log('CCCCCCCC');
    }
    update = (e) => {
        console.log(e.target.value);
        this.props.testMethod(e.target.value);
        this.setState({stateVal: e.target.value});
      };

    render() {
        return (
            <div>Welcome DDD1
            <div>Child component - state values =</div>
            <input onClick={this.test.bind(this)}
          type="text"
          placeholder="type here"
          onChange={this.update}
          value={this.state?this.state.stateVal:null}
        />
            <GG></GG>
            {
                this.props?this.props.children:null
            }
            </div>
        );
    }
}

export default DD;
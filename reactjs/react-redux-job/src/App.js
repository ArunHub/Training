import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Homepage from './homepage';

// class App extends Component {

//   constructor(props){
//     super(props);
//   }
 
//   render() {
//     return (
//       <Router>
//         <Homepage store={this.props.store}/>
//       </Router>
//     );
//   }
// }

const App = props => {
  return(
    <Router>
        <Homepage/>
      </Router>
  )
}

export default App;

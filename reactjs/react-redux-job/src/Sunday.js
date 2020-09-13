import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import NoMatch from './router/no-match';


const Sunday = ({ match }) => {
    return (
        
        <div className="route">
            <h3>Child routing</h3>
            <div>
                <Link to={match.url + '/about'}>Go to about page</Link>
            </div>
            <div>
                <Link to={match.url + '/no-match'}>No match link</Link>
            </div>

            <Switch>
                {/* matches first route when pathname are same */}
                <Route path={match.url + '/about'} render={(props) => <h4>Hi, I am about page</h4>} />
                {/* use render attr when using inline in scope props to send  */}
                <Route path={match.url + '/about'} render={(props) => <div>Switch case 1</div>} />
                {/* renders only when other path didnt match*/}
                <Route component={NoMatch} />
            </Switch>

            {/* renders always this component irrespective of match/path*/}
            {/* <Route component={NoMatch}/> */}
            {/* <Redirect to='/'/> */}
            <div>
                <Link to={match.url + '/params'}>params link</Link>
            </div>
            <Route path={match.url + '/:topicId'} component={Topic} />
        </div>
    )
}

const Topic = ({ match }) => (
    <div>
        <h3>Which page selected: {match.params.topicId}</h3>
    </div>
);

export default Sunday;
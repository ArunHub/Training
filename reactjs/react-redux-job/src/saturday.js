import React from 'react';
import Sunday from './Sunday';
import { Route, Link } from 'react-router-dom'

const Saturday = ({match}) => {
    return(
        <div>parent route path - {match.url}
            <div>
            <Link to={match.url+'/sunday'}>Link to Sunday child component</Link>
            </div>
            <Route path={match.url+'/sunday'} component={Sunday}/>
        </div>
    )
}

export default Saturday;
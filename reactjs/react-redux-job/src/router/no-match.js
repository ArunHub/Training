import React from 'react';

const NoMatch = ({location}) => {
    return (
        <div>no match for: {location.pathname}</div>
    )
}

export default NoMatch;
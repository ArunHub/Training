import React from 'react';

const Alert = (props) => {
    return (
        <div style={{ display: props.showAlert ? 'block' : 'none'}}>alert works</div>
    )
}

export default Alert;
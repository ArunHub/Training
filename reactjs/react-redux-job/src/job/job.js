import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job, handleJob}) => {
    let jobItem = job;

    const applyJob = () => {
        handleJob(jobItem);
    }

    return (
        <tr>
            <td>{jobItem.id}</td>
            <td>{jobItem.name}</td>
            <td>{jobItem.positions}</td>
            <td><button onClick={applyJob}><Link to="/form">Apply</Link></button></td>
        </tr>
    )
}

export default Job;
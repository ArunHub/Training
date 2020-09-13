import React from 'react';

const AppliedJobs = ({ list }) => {
    const appliedlist = list.map((t, i) => {
        return <div key={i}> {t.name} applied for : {t.jobname} </div>;
    });
    return (
        (appliedlist.length > 0) ?
            <div>{appliedlist}</div>
            : <div>No jobs applied</div>
    )
}

export default AppliedJobs;
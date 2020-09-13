import React from 'react';
import Job from '../job/job';

const JobList = (props) => {
    let jobList;

    console.log('joblist', props);

    if (props.listjob.length>0) {
        jobList = props.listjob.map((t) =>
            <Job job={t} key={t.id} handleJob={props.handleJob}/>
        )
    }

    return (
        <table border="2" width="100%" align="center">
            <thead>
                <tr>
                    <th>id</th>
                    <th>job name</th>
                    <th>no of positions</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody align="center">
                {jobList}
            </tbody>
        </table>
    )
}

// let mapStatetoProps= (state) => {
//     return {list: state.TodoReducer.cms};
//   };
  
//   let mapDispatchtoProps= (dispatch) => {
//     return {};
//   };
  
// export default connect(mapStatetoProps, mapDispatchtoProps)(JobList);
export default JobList;
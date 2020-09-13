import jobService from '../service';
export const ADD_TODO = 'ADD_TODO';
export const LOAD_CMS = 'LOAD_CMS';
export const DECREMENT_POS = 'DECREMENT_POS';
export const APPLY_JOB = 'APPLY_JOB';

export function addTodo (text){
    return {
        type: ADD_TODO,
        text
    }
}

export function loadCms(cms) {
    // console.log(cms,'cms');
    // jobService.getCMS(url).then((success) => {
    //     return {
    //         type: LOAD_CMS,
    //         cms: success.content
    //     }
    // },
    //     (error) => {
    //         console.log('errrow while receive response', error)
    //         return {
    //             type: 'LOAD_CMS_ERROR',
    //             cms: "failed to fetch"
    //         }
    //     });
    return {
        type: LOAD_CMS,
        cms
    }
}

export function fetchCms(url) {
    return (dispatch) => {
        // dispatch(itemsAreLoading(true));
        jobService.getCMS(url)
        .then((response) => {
            console.log('first', dispatch)
                // if (response.status !== 200) {
                //     throw Error(response.statusText);
                // }

                // dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(loadCms(response.content)))
            .catch(() => console.log('error in actions'));//dispatch(itemsHaveError(true)));
    };
}

export function decrPos(id) {
    return {
        type: DECREMENT_POS,
        id
    }
}

export function appliedJobAction(obj) {
    return {
        type: APPLY_JOB,
        obj
    }
}
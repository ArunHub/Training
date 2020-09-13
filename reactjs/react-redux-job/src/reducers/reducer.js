import { combineReducers } from 'redux'

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: [],
    cms: {},
    appliedJobs: []
}

function singleCms(state, action) {
    switch (action.type) {
        case 'DECREMENT_POS':
            if (state.id === action.id) {
                return Object.assign({}, state, {
                    positions: state.positions - 1
                })
            }
            return state
        default:
            return state
    }
}

function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                text: action.text
            })
        case 'LOAD_CMS':
            return Object.assign({}, state, {
                cms: action.cms
            })
        case 'DECREMENT_POS':
            return Object.assign({}, state, {
                cms: state.cms.map((t) => singleCms(t, action))
            })
        case 'APPLY_JOB':
            return Object.assign({}, state, {
                appliedJobs: [...state.appliedJobs, action.obj]
            })
        default:
            return state
    }
}

const combineApp = combineReducers({
    TodoReducer
})

export default combineApp;
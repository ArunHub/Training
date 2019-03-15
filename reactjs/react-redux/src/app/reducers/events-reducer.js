import { FETCH_ALL_EVENTS, FETCH_SINGLE_EVENT } from "../actions/action-types";

const initialState = {
    items: [],
    item: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_EVENTS:
            state = {
                ...state,
                items: action.payload
            }
            break;
        case FETCH_SINGLE_EVENT:
            state = {
                ...state,
                item: action.payload
            }
            break;

        default:
            break;
    }
    return state;
}
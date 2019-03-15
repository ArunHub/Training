import { FETCH_ALL_POSTS } from "../actions/action-types";

const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            state = {
                ...state,
                posts: action.payload
            }
            break;
    }
    return state;
}

export default postsReducer;
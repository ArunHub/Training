import { combineReducers } from "redux";

import eventsReducer from "./events-reducer";
import postsReducer from "./posts-reducer";

export default combineReducers({ //used to combine multiple reducers
    eventsReducer,
    postsReducer
})

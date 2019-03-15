import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "../reducers/root-reducer";
//import default reducer from anonymous : PERIOD

const initialState = {};
const middlewares = [thunk, logger];
const store = createStore(rootReducer, initialState,
    compose(
        applyMiddleware(...middlewares), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__())
    )

export default store;
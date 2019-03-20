import { applyMiddleware, //used to compose custom and 3rd party middleware in store
     createStore, // create a new store
      compose // compose multiple middlewares
    } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger"; // gives every action in store as logs in console

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
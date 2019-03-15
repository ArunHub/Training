import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

const myCustomMiddleware = store => next => action => {
    console.log(`Action ${action.type} has been dispatched with the payload ${action.payload}`);
    action.payload.city = "Mumbai";
    next(action);
}

const initEmpState = {
    employee: {
        employeeName: "",
        address: "",
        city: ""
    }
}

const initDeptState = {
    deptName: "",
    address: "",
    city: ""
}

const departmentReducer = (state = initDeptState, action) => {
    switch (action.type) {
        case "CHANGE_DEPARTMENT":
            state = {
                ...state,
                deptName: action.payload.deptName,
                address: action.payload.address,
                city: action.payload.city,
            }
            break;
    }
    return state;
}

const employeeReducer = (state = initEmpState, action) => {
    switch (action.type) {
        case "CHANGE_ADDRESS":
            state = {
                ...state,
                employee: {
                    employeeName: action.payload.employeeName,
                    address: action.payload.address,
                    city: action.payload.city,
                }


            }
            break;
    }
    return state;
}

const rootReducer = [employeeReducer, departmentReducer]

const middleware = [
    myCustomMiddleware,
    logger
]

const store = createStore(combineReducers(rootReducer), applyMiddleware(...middleware));

store.subscribe(() => console.log('store updated - ' + JSON.stringify(store.getState())));


store.dispatch({
    type: "CHANGE_ADDRESS",
    payload: {
        employeeName: "arun",
        address: "Suncity",
        city: "Pune"
    }
})

store.dispatch({
    type: "CHANGE_DEPARTMENT",
    payload: {
        deptName: "Developement",
        address: "Hijenwadi",
        city: "Pune"
    }
})
                                // store.dispatch({
                                //     type: "ADD",
                                //     payload: 90
                                // })
                                // store.dispatch({
                                //     type: "SUB",
                                //     payload: 45
                                // })
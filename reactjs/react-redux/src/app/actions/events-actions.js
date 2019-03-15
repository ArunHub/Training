import { FETCH_ALL_EVENTS, FETCH_SINGLE_EVENT, NEW_EVENT, FETCH_ALL_POSTS } from "./action-types";

export const getAllEvents = () => dispatch => {
    fetch("http://localhost:9091/api/events").then(
        response => response.json(),
        reason => reason
    ).then(
        events => dispatch({
            type: FETCH_ALL_EVENTS,
            payload: events
        }),
        reason => { throw new Error(reason) }
    )
}

export const getAllPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        response => response.json(),
        reason => reason
    ).then(
        posts => dispatch({
            type: FETCH_ALL_POSTS,
            payload: posts
        }),
        reason => { throw new Error(reason) }
    )
}

export const getSingleEvent = (id) => dispatch => {
    fetch("http://localhost:9091/api/events/" + id).then(
        response => response.json(),
        reason => reason
    ).then(
        event => (          
            dispatch({
            type: FETCH_SINGLE_EVENT,
            payload: event
        })
    ),
        reason => { throw new Error(reason) }
    )
}

export const insertNewEvent = (event) => dispatch => {
    fetch("http://localhost:9091/api/events", {
        method: 'POST',
        headers: new Headers({
            "content-type": "application/json",
        }),
        body: JSON.stringify(event)
    }).then(
        response => response.json(),
        reason => reason
    ).then(
        event => dispatch({
            type: NEW_EVENT,
            payload: event
        }),
        reason => { throw new Error(reason) }
    )
}
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Import routing components
import configureStore from './configStore';
import { Provider } from 'react-redux'

const store = configureStore();

// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
//     console.log('sub',store.getState())
// )

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// Stop listening to state updates
// unsubscribe()
registerServiceWorker();

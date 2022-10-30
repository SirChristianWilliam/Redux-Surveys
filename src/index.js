import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;

    }
    return state;
}

const understanding = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING':
            return action.payload;

    }
    return state;
}

const support = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT':
            return action.payload;
 
    }
    return state;
}

const comments = (state = "", action) => {
   
    switch (action.type) {
        case 'SET_COMMENT':
            return action.payload;
    }
    console.log('action.payload', action.payload)
    return state;
}


// const flagged = (state = 0, action) => {
//     return state;
// }

// const date = (state = 0, action) => {
//     return state;
// }

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
        // flagged,
        // date
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

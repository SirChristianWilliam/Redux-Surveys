import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feeling = (state = 0, action) => { // feeling variable is saying the state starts at 0.
    // action is the second parameter it takes in, which isn't made for me to understand completely yet
    // but it checks the 'case', or 'if' data when calling action.type.
    // SET_FEELING is a conditional, and is listening among the components for a dispatch with the
    // correlating value. The action.payload is the value sent in the payload property, in this case from the
    // Feeling.jsx component on line 12. If it receives that dispatch, the return is that value of the 
    // payload, otherwise it's the state, which as you can see on line 10 is equal to a value of 0. 
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
    }
    return state;
};

const understanding = (state = 0, action) => {
    switch (action.type) {
        case 'SET_UNDERSTANDING': // Correlates to line 12 in the Understanding componenent. Again,
        // The value is the payload object sent over, and that value is determined by the onChange
        // input events, and ultimately the onSubmit events. 
            return action.payload;
    }
    return state;
};

const support = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SUPPORT': // Line 13 in the Support.jsx component's dispatch call
            return action.payload;
    }
    return state;
};

const comments = (state = "", action) => { // Instead of a number, this is a text string. Same process as
    // the ones above. 
    switch (action.type) {
        case 'SET_COMMENT': // Line 13, Comments.jsx component
            return action.payload;
    }
    return state;
};

const flagged = (state = false) => { // Flagged state begins as false, gets changed in the Admin component
    return state;
}

const storeInstance = createStore(
    // All of these are store properties, their values gleaned from the variables above. When accesing the
    // store across componenents, they will need to be accessed using these exact spellings.
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        flagged
        // date ( Ready to be used, but again I don't think it's necessary to include this on the DOM)
        // I sort the table by "id", by DESC and that's how I get the correct order of showing the newest
        // entries on the top. 
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance} > 
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();


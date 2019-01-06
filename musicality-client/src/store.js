import React from 'react'
import {
    createStore,
    applyMiddleware, // to make asynchronous calls to backend
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const songsReducer = (state = [], action) => {
    switch(action.type) {

        case 'GET_SONGS_SUCCESS':
            return action.songs

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    songs: songsReducer
});
const middleware = [thunk]

export default createStore(
    rootReducer,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);
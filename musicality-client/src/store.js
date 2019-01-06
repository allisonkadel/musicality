import {
    createStore,
    applyMiddleware, // to make asynchronous calls to backend
    combineReducers,
    compose
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
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware)
))

export default store;
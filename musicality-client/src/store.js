import {
    createStore,
    applyMiddleware, // to make asynchronous calls to backend
    combineReducers,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import songsReducer from './reducers/songsReducer'


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
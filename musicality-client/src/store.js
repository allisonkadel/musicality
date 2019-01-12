import {
    createStore,
    applyMiddleware, // to make asynchronous calls to backend
    combineReducers,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import songsReducer from './reducers/songsReducer';
import songFormData from './reducers/songFormData';
import lyricsReducer from './reducers/lyricsReducer';
import lyricFormData from './reducers/lyricFormData';
import currentRecords from './reducers/currentRecords';


const rootReducer = combineReducers({
    songs: songsReducer,
    lyrics: lyricsReducer,
    songFormData,
    lyricFormData,
    currentRecords
});
const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware)
))

// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(...middleware)
// )


export default store;
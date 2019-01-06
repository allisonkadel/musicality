import React, { Component } from 'react';
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

class SongForm extends Component {
    render() {
        return (
            <div>
                Add a New Song
                <form>
                </form>
            </div>
        )
    }
}

export default SongForm;
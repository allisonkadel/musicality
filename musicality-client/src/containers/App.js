import React, { Component } from 'react';
import Songs from './Songs';
import SongForm from './SongForm';
import SongsContainer from './SongsContainer';
import './App.css'

class App extends Component {

    render() {
        return (
            <div className='App'>
                {/* <SongForm/>
                <Songs/> */}
                <SongsContainer/>
            </div>
        )
    }
}

export default App;

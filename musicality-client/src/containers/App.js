import React, { Component } from 'react';
import Songs from './Songs';
import SongForm from './SongForm';
import SongsContainer from './SongsContainer';
import NavBar from '../components/NavBar';
import './App.css'

class App extends Component {

    render() {
        return (
            <div className='App'>
                <NavBar/>
                {/* <SongForm/>
                <Songs/> */}
                {/* <SongsContainer/> */}
            </div>
        )
    }
}

export default App;

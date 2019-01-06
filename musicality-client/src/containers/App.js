import React, { Component } from 'react';
import './App.css'
import Songs from './Songs'

const songs = [
    {
        name: 'doodledandy',
        artist: 'sher',
        chords: 'ABCF'
    },
    {
        name: 'fooom',
        artist: 'the roof cats',
        chords: 'GEmC'
    }
]


class App extends Component {
    render() {
        return (
            <div className='App'>
                App Container
                <Songs songs={songs}/>
            </div>
        )
    }
}

export default App;

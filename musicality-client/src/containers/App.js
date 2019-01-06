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
    },
    {
        name: 'fooled ya 3 times',
        artist: 'the goofster',
        chords: 'ABCD'
    },
    {
        name: 'love you like chocolate',
        artist: 'sister forest',
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

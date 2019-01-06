import React, { Component } from 'react';
import Songs from './Songs';
import './App.css'

// const songs = [
//     {
//         name: 'doodledandy',
//         artist: 'sher',
//         chords: 'ABCF'
//     },
//     {
//         name: 'fooom',
//         artist: 'the roof cats',
//         chords: 'GEmC'
//     },
//     {
//         name: 'fooled ya 3 times',
//         artist: 'the goofster',
//         chords: 'ABCD'
//     },
//     {
//         name: 'love you like chocolate',
//         artist: 'sister forest',
//         chords: 'GEmC'
//     }
// ]

class App extends Component {

    // state = {
    //     songs: []
    // }
    


    render() {
        // console.log(this.state)
        return (
            <div className='App'>
                App Container
                <Songs/>
            </div>
        )
    }
}

export default App;

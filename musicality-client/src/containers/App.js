import React, { Component } from 'react';
import './App.css'
import Songs from './Songs'

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

    state = {
        songs: []
    }
    
    componentDidMount(){
        fetch('http://192.168.1.31:3000/api/v1/songs')
        .then(response => response.json())
        .then(songs => this.setState({songs: songs}))
    }

    render() {
        console.log(this.state)
        return (
            <div className='App'>
                App Container
                <Songs songs={this.state.songs}/>
            </div>
        )
    }
}

export default App;

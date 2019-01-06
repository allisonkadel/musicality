import React, { Component } from 'react'
import SongCard from '../components/SongCard'
import './Songs.css'

class Songs extends Component {

    render() {
        return(
            <div className='SongsContainer'>
                <h1 className='App-header'>Songs In Your Library</h1>
                {this.props.songs.map(song => <SongCard key={song.id} song={song}/>)}
            </div>
        )}
}

export default Songs;
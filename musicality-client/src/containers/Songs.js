import React from 'react'
import SongCard from '../components/SongCard'
import './Songs.css'

const Songs = (props) => (
    <div className='SongsContainer'>
        <h1 className='App-header'>Songs In Your Library</h1>
        {props.songs.map(song => <SongCard key={song.id} song={song}/>)}
    </div>
)

export default Songs;
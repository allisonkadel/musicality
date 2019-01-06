import React from 'react'
import './Songs.css'

const Songs = (props) => (
    <div className='SongsContainer'>
        <h1>Songs In Your Library</h1>
        {props.songs.map(song => 
            <div className='SongCard'>
                <h3>{song.name} - {song.artist}</h3>
                <h4>{song.chords}</h4>
                <img width='100%'
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
            </div>
        )}
    </div>
)

export default Songs;
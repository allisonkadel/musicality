import React from 'react'

const Songs = (props) => (
    <div>
        <h1>Songs In Your Library</h1>
        {props.songs.map(song => 
            <div>
                <h3>{song.name} - {song.artist}</h3>
                <h4>{song.chords}</h4>
                <img 
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
            </div>
        )}
    </div>
)

export default Songs;
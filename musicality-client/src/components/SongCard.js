import React from 'react'

const SongCard = ({song}) => (
    <div key={song.id} className='SongCard'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        <h4>{song.chords}</h4>
        <img width='100%'
            src='https://www.guitar-chord.org/images/c_chord_chart.png'
            alt='chord chart'
        />
    </div>
)
export default SongCard;
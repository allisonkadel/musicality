import React from 'react';
import ChordsCard from './chords/ChordsCard';

const SongCard = ({song}) => (
    <div key={song.id} className='SongCard'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        <ChordsCard chords={song.chords}/>
        <img width='100%'
            src='https://www.guitar-chord.org/images/c_chord_chart.png'
            alt='chord chart'
        />
    </div>
)
export default SongCard;
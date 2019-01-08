import React from 'react';
import ChordCard from './ChordCard';

const ChordsCard = ({chords}) => (
    <div>
        {chords.map(chord => <ChordCard chord={chord}/>)}
    </div>
)
export default ChordsCard;
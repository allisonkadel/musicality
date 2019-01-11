import React from 'react';
import { Link, Route } from 'react-router-dom';

    const LyricCard = (props) => {
        return(
            <div key={props.lyric.id} className='LyricCard'>
                <h3>{props.lyric.text}</h3>
                <h3>{props.lyric.chord}</h3>

                <button onClick={() => { props.destroyLyric(props.lyric.id) }}>X</button>
            </div>
        )
    }
        

export default LyricCard;
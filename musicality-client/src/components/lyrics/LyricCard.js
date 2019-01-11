import React from 'react';
import { Link, Route } from 'react-router-dom';

    const LyricCard = (props) => {
        return(
            <div key={props.lyric.id} className='LyricCard'>
                <div><h3 className='Lyric-text' >{props.lyric.text}</h3></div>
                <div><h3 className='Lyric-text' >{props.lyric.chord}</h3></div>
            <button onClick={() => { props.destroyLyric(props.songId, props.lyric.id) }}>X</button>
            </div>
        )
    }
        

export default LyricCard;
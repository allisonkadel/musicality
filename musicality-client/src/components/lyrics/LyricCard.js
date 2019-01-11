import React from 'react';
import { Link, Route } from 'react-router-dom';

    const LyricCard = (props) => {
        return(
                <div key={props.lyric.id} className='LyricCard'>
                    <div><h4 className='Lyric-text'>{props.lyric.text}</h4></div>
                    <div><h3 className='Lyric-text' >{props.lyric.chord}</h3></div>
                    <button onClick={() => { props.destroyLyric(props.songId, props.lyric.id) }}>X</button>
                    <button onClick={() => { props.updateLyric(props.songId, props.lyric.id) }}>Edit</button>
                </div>
        )
    }
        

export default LyricCard;
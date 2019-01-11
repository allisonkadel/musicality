import React from 'react';
import { Link, Route } from 'react-router-dom';

    const LyricCard = (props) => {
        return(
                <div key={props.lyric.id} className='LyricCard'>
                    <div><h4 className='Lyric-text'>{props.lyric.text}</h4></div>
                    <div><h3 className='Lyric-text' >{props.lyric.chord}</h3></div>
                    <button className="button-form" onClick={() => { props.destroyLyric(props.songId, props.lyric.id) }}>X</button>
                    <button className="button-form">
                        <Link to={`/songs/${props.songId}/lyrics/${props.lyric.id}/edit`}>#</Link>
                    </button>
                </div>
        )
    }
        

export default LyricCard;
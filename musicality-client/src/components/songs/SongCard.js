import React from 'react';
import { Link } from 'react-router-dom';

    const SongCard = (props) => {
        console.log("These are the SongCard props:", props)
        return(
            <div key={props.song.id} className='SongCard'>
                <h3>{props.song.name}</h3>
                <h4>{props.song.artist}</h4>
                <img width='100%'
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
                <button onClick={() => { props.destroySong(props.song.id) }}>X</button>

                 <button>
                    <Link to={`/songs/${props.song.id}/lyrics`} onClick={() => { props.fillSong({ name: props.song.name, artist: props.song.artist }) }}>Add Lyrics</Link>
                </button>
            </div>
        )
    }
        

export default SongCard;
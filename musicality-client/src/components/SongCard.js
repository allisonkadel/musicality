import React from 'react';
// import ChordsCard from './chords/ChordsCard';
import LyricsContainer from '../containers/LyricsContainer';
// import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
// import Lyrics from './lyrics/Lyrics';




    const SongCard = (props) => {
        // console.log("These are the SongCard props:", props)
        return(
            <div key={props.song.id} className='SongCard'>
                <h3>{props.song.name}</h3>
                <h4>{props.song.artist}</h4>
                <strong>This is where the LyricsContainer goes</strong>
                <img width='100%'
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
                <button onClick={() => { props.destroySong(props.song.id) }}>X</button>

                 <button>
                    <Link to={`/songs/${props.song.id}/lyrics`}>Add Lyrics</Link>
                </button>
                
                {/* <Route path={'/songs/:songId/lyrics'} component={LyricsContainer}/> */}

                {/* <button onClick={() => { props.fetchLyrics(props.song.id) }}></button> */}



                {/* <button>
                <Link to={`/${props.song.id}/lyrics`}>Song Test</Link>
                </button> */}

                {/* <button type="submit" formaction={`/songs/${props.song.id}/lyrics`} onClick={() => { props.fetchLyrics(props.song.id) }}>Add Lyrics</button> */}
                
                {/* <LyricsContainer song={props.song}/> */}

                {/* <Route 
                    path='/:songId/lyrics' 
                    component={LyricsContainer}
                /> */}

                {/* <Route 
                    path={`/songs/:songId/lyrics`}
                    component={LyricsContainer}
                    song={props.song}
                /> */}

                {/* <Route path={`songs/:id`} component={LyricsContainer} /> */}
                
                
                {/* <LyricsContainer song={props.song}/> */}
                {/* <button onClick={() => { props.handleToggle() }}>Edit</button> */}
            </div>
        )
    }
        

export default SongCard;
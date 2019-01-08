import React, { Component } from 'react';
// import ChordsCard from './chords/ChordsCard';
import LyricContainer from '../containers/LyricContainer';
import LyricsContainer from '../containers/LyricsContainer';
// import { connect } from 'react-redux';

 
    function handleToggle() {
        if (this.style.display === "none") {
            this.style.display = "block";
        } else {
            this.style.display = "none";
        }
        }


    const SongCard = (props) => {
        return(
            <div key={props.song.id} className='SongCard'>
                <h3>{props.song.name}</h3>
                <h4>{props.song.artist}</h4>
                <strong>This is where the LyricContainer goes</strong>
                <img width='100%'
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
                <LyricContainer toggleLyrics={props.toggleLyrics} sondId={props.song.id}/>
                <button onClick={() => { props.handleToggle() }}>Edit</button>
                <button onClick={() => { props.destroySong(props.song.id) }}>X</button>
            </div>
        )
    }
        

export default SongCard;
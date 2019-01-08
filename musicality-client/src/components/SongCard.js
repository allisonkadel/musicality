import React, { Component } from 'react';
// import ChordsCard from './chords/ChordsCard';
import LyricContainer from '../containers/LyricContainer';
import { connect } from 'react-redux';

class SongCard extends Component {

    // handleOnClick() {
    //     debugger
    //     this.props.destroySong(this.props.song.id)
    // }

    render() {
        return(
            <div key={this.props.song.id} className='SongCard'>
                <h3>{this.props.song.name}</h3>
                <h4>{this.props.song.artist}</h4>
                <strong>This is where the LyricContainer goes</strong>
                <img width='100%'
                    src='https://www.guitar-chord.org/images/c_chord_chart.png'
                    alt='chord chart'
                />
                {/* <LyricContainer sondId={song.id}/> */}
                {/* <button onClick={()=>this.props.dispatch({type:'DELETE_SONG',id:this.props.song.id})}>X</button> */}
                <button onClick={this.props.destroySong(this.props.song.id)}>X</button>
            </div>
        )
    }

}
export default connect()(SongCard);
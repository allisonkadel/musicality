import React, { Component } from 'react';
import LyricForm from './LyricForm'
import Lyrics from '../components/lyrics/Lyrics';
import { fetchLyrics, createLyric, destroyLyric, } from '../actions/lyrics';
import { connect } from 'react-redux'

class LyricsContainer extends Component {

    

    componentDidMount() {
        this.props.fetchLyrics(this.props.match.params.songId);
        alert("lyrics container mounted!!!!")
    }

  render() {
    console.log("LyricsContainer props:", this.props)
    return (
      <div>
          LyricForm Component
        {/* <LyricForm
          createLyric={this.props.createLyric}
          // songId={this.props.song.id}/>
          songId={this.props.match.params.songId}/> */}
        Lyrics Component
        <Lyrics
          lyrics={this.props.lyrics}
          songId={this.props.match.params.songId}
          destroyLyric={this.props.destroyLyric}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    lyrics: state.lyrics,
    lyricFormData: state.lyricFormData })

// const mapDispatchToProps = dispatch => ({

//   addSong: text => dispatch({type: 'ADD_SONG', text}),
//   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// })

export default connect(mapStateToProps, { fetchLyrics, createLyric, destroyLyric } )(LyricsContainer)
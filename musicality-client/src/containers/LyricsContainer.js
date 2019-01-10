import React, { Component } from 'react';
import LyricForm from './LyricForm'
import Lyrics from '../components/lyrics/Lyrics';
import { fetchLyrics } from '../actions/lyrics';
import { connect } from 'react-redux'

class LyricsContainer extends Component {

    componentDidMount() {
        this.props.fetchLyrics(this.props.match.params.songId);
    }

  render() {
    console.log("LyricsContainer props:", this.props)
    return (
      <div>
          LyricForm Component
        {/* <LyricForm
          createLyric={this.props.createLyric}
          songId={this.props.song.id}/> */}
        Lyrics Component
        <Lyrics
          lyrics={this.props.lyrics}
          song={this.props.song}
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

export default connect(mapStateToProps, { fetchLyrics })(LyricsContainer)

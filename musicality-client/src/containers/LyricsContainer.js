import React, { Component } from 'react';
import LyricForm from './LyricForm'
import Lyrics from '../components/lyrics/Lyrics';
import { fetchLyrics, createLyric, destroyLyric } from '../actions/lyrics';
import { connect } from 'react-redux'
import { prePopulate } from '../actions/lyricForm'

class LyricsContainer extends Component {

    componentDidMount() {
        this.props.fetchLyrics(this.props.match.params.songId);
    }

  render() {
    console.log("LyricsContainer props:", this.props)
    return (
      <div>
        <LyricForm
          createLyric={this.props.createLyric}
          songId={this.props.match.params.songId}/>
        <Lyrics
          lyrics={this.props.lyrics}
          songId={this.props.match.params.songId}
          destroyLyric={this.props.destroyLyric}
          prePopulate={ this.props.prePopulate }
          currentSong={this.props.currentSong}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    lyrics: state.lyrics,
    lyricFormData: state.lyricFormData,
    currentSong: state.currentData.currentSong
})

// const mapDispatchToProps = dispatch => ({

//   addSong: text => dispatch({type: 'ADD_SONG', text}),
//   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// })

export default connect(mapStateToProps, { fetchLyrics, createLyric, destroyLyric, prePopulate } )(LyricsContainer)
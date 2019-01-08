import React, { Component } from 'react';
import LyricForm from './LyricForm'
import Lyrics from '..component/lyrics/Lyrics';
import { fetchLyrics, createLyric, destroyLyric } from '../actions/lyrics';
import { connect } from 'react-redux'

class LyricsContainer extends Component {

    componentDidMount() {
        this.props.fetchLyrics();
    }

  render() {
    return (
      <div>
          LyricForm Component
        <LyricForm 
          createLyric={this.props.createLyric}
          songId={this.props.song.id}/>
        Lyrics Component
        <Lyrics
          lyrics={this.props.lyrics}
          songId={this.props.song.id}
          destroySong={this.props.destroyLyric}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
    songs: state.songs,
    songFormData: state.songFormData })

// const mapDispatchToProps = dispatch => ({

//   addSong: text => dispatch({type: 'ADD_SONG', text}),
//   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// })

export default connect(mapStateToProps, { fetchSongs, createSong, destroySong })(SongsContainer)

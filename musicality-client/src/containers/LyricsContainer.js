import React, { Component } from 'react';
import LyricForm from './LyricForm'
import Lyrics from './Lyrics'
import { fetchLyrics, createLyric, destroyLyric } from '../actions/lyrics';
import { connect } from 'react-redux'

class LyricsContainer extends Component {

    componentDidMount() {
        this.props.fetchLyrics();
    }

  render() {
    return (
      <div>
          SongForm Component
        <SongForm createSong={this.props.createSong}/>
        Songs Component
        <Songs
          songs={this.props.songs}
          destroySong={this.props.destroySong}
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

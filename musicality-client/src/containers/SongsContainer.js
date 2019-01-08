import React, { Component } from 'react';
import SongForm from './SongForm'
import Songs from './Songs'
import { fetchSongs, createSong, destroySong } from '../actions/songs';
import { connect } from 'react-redux'

class SongsContainer extends Component {

    componentDidMount() {
        this.props.fetchSongs();
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
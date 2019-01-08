import React, { Component } from 'react';
import SongForm from '../components/songs/SongForm'
import Songs from '../components/songs/Songs'
import { connect } from 'react-redux'

class SongsContainer extends Component {
  render() {
    return (
      <div>
        <SongForm addSong={this.props.addSong}/>
        <Songs
          songs={this.props.songs}
          deleteSong={this.props.deleteSong}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ songs: state.songs })

const mapDispatchToProps = dispatch => ({
  addSong: text => dispatch({type: 'ADD_SONG', text}),
  deleteSong: id => dispatch({type: 'DELETE_SONG', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer)
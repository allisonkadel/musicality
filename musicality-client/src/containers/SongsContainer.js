import React, { Component } from 'react';
import SongForm from '../components/songs/SongForm'
import Songs from '../components/songs/Songs'
import { connect } from 'react-redux'

class SongsContainer extends Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

  render() {
    return (
      <div>
        <SongForm addSong={this.props.createSong}/>
        <Songs
          songs={this.props.songs}
        //   deleteSong={this.props.destroySong}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ songs: state.songs })

// const mapDispatchToProps = dispatch => ({

//   addSong: text => dispatch({type: 'ADD_SONG', text}),
//   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// })

export default connect(mapStateToProps, { fetchSongs, createSong })(SongsContainer)
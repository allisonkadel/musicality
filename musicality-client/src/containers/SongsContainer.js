import React, { Component } from 'react';
import SongForm from './SongForm'
import Songs from './Songs'
import { fetchSongs, createSong, destroySong } from '../actions/songs';
import { fetchLyrics } from '../actions/lyrics';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

class SongsContainer extends Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

  render() {
    // console.log(this.props)
    return (
      <div>
        <SongForm createSong={this.props.createSong}/>
        <Route 
          // path={'/songs'} 
          render={() => 
            <Songs 
              songs={this.props.songs} 
              destroySong={this.props.destroySong}
              fetchLyrics={this.props.fetchLyrics}
            />
          }
        />
          {/* songs={this.props.songs}
          destroySong={this.props.destroySong}
        /> */}
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

export default connect(mapStateToProps, { fetchSongs, createSong, destroySong, fetchLyrics })(SongsContainer)
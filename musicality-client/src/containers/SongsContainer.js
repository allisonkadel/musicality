import React, { Component } from 'react';
import SongForm from '../hybrids/SongForm';
import Songs from '../components/songs/Songs';
import { fetchSongs, createSong, destroySong } from '../actions/songs';
import { fillSong } from '../actions/lyrics';
import { connect } from 'react-redux';

class SongsContainer extends Component {

    componentDidMount() {
        this.props.fetchSongs();
    }

  render() {
    console.log("SONGS CONTAINER PROPS :", this.props)

    return (
      <div>
        <SongForm createSong={this.props.createSong}/>
          <Songs 
            songs={this.props.songs} 
            destroySong={this.props.destroySong}
            fetchLyrics={this.props.fetchLyrics}
            fillSong={this.props.fillSong}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
    songs: state.songs,
    songFormData: state.songFormData })

export default connect(mapStateToProps, { fetchSongs, createSong, destroySong, fillSong })(SongsContainer)
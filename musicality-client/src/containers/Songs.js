import React, { Component } from 'react'
import { connect } from 'react-redux'
import SongCard from '../components/SongCard'
import SongForm from './SongForm'
import { fetchSongs } from '../actions/songs'
import './Songs.css'

class Songs extends Component {

    render() {
        return(
            <div className='SongsContainer'>
                <h1 className='App-header'>Songs In Your Library</h1>
                {this.props.songs.map(song => <SongCard key={song.id} song={song}/>)}
                <SongForm/>
            </div>
        )}
}

const mapStateToProps = (state) => {
    return ({
        songs: state.songs
    })
}

export default connect(mapStateToProps,{ fetchSongs })(Songs);
import React, { Component } from 'react';
import SongCard from './SongCard';
import './Songs.css';

class Songs extends Component {

    render() {
        console.log("These are Songs.js props: ",this.props)
        return(
            <div className='SongsContainer'>
                <h1 className='App-header'>Songs In Your Library</h1>
                {this.props.songs.map(song => 
                    <SongCard 
                        key={song.id}
                        song={song}
                        destroySong={this.props.destroySong}
                        fetchLyrics={this.props.fetchLyrics}
                        fillSong={this.props.fillSong}
                    />
                )}
            </div>
        )}
}

export default Songs;


import React, { Component } from 'react';
import LyricCard from './LyricCard';
import './Lyrics.css';

class Lyrics extends Component {

    render() {
        // We need to access the song in this lyrics array
        console.log("Lyrics Props: ",this.props)
        const ab = this.props.lyrics[0]
        console.log(ab)
        return(
            <div className='LyricsContainer'>
                <h1 className='App-header'>Lyrics</h1>
                {this.props.lyrics.map(lyric => 
                    <LyricCard 
                        key={lyric.id} 
                        lyric={lyric} 
                        destroyLyric={this.props.destroyLyric}
                        songId={this.props.songId}
                    />
                )}
            </div>
        )}
}

export default Lyrics;


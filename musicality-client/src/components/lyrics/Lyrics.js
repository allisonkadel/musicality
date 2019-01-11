import React, { Component } from 'react';
import LyricCard from './LyricCard';
import './Lyrics.css';

class Lyrics extends Component {

    render() {
        console.log("Lyrics Props: ",this.props)
        return(
            <div className='LyricsContainer'>
                <h1 className='App-header'>Song Lyrics</h1>
                {this.props.lyrics.map(lyric => 
                    <LyricCard 
                        key={lyric.id} 
                        lyric={lyric} 
                        destroyLyric={this.props.destroyLyric}
                    />
                )}
            </div>
        )}
}

export default Lyrics;


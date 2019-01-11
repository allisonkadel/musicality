import React, { Component } from 'react';
// import { connect } from 'react-redux'
import LyricCard from './LyricCard';
// import { fetchSongs, destroySong } from '../actions/songs'
import './Lyrics.css';

class Lyrics extends Component {

    // componentDidMount() {
    //     this.props.fetchSongs();
    // }

    render() {
        console.log("Lyrics Props: ",this.props)
        return(
            <div className='LyricsContainer'>
                <h1 className='App-header'>Song Lyrics</h1>
                {this.props.lyrics.map(lyric => 
                    <h1>{lyric.id}</h1>
                    // <LyricCard 
                    //     key={lyric.id} 
                    //     lyric={lyric} 
                    //     destroyLyric={this.props.destroyLyric}
                    // />
                )}
            </div>
        )}
}

// const mapStateToProps = (state) => {
//     return ({
//         songs: state.songs
//     })
// }

// export default connect(mapStateToProps, { fetchSongs, destroySong })(Songs);
export default Lyrics;


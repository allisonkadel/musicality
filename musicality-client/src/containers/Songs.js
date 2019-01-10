import React, { Component } from 'react'
// import { connect } from 'react-redux'
import SongCard from '../components/SongCard'
// import { fetchSongs, destroySong } from '../actions/songs'
import './Songs.css'

class Songs extends Component {

    // componentDidMount() {
    //     this.props.fetchSongs();
    // }

    render() {
        return(
            <div className='SongsContainer'>
                <h1 className='App-header'>Songs In Your Library</h1>
                {this.props.songs.map(song => 
                    <SongCard 
                        key={song.id} 
                        song={song} 
                        destroySong={this.props.destroySong}
                        match={`${this.props.match.path}/${song.id}`}
                    />
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
export default Songs;


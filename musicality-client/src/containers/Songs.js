import React, { Component } from 'react'
// import { connect } from 'react-redux'
import SongCard from '../components/SongCard'
// import { fetchSongs, destroySong } from '../actions/songs'
import './Songs.css'
import { Route } from 'react-router';

class Songs extends Component {

    // componentDidMount() {
    //     this.props.fetchSongs();
    // }

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
                    />
                    // <Route 
                    // // path={this.props.match.path} 
                    // render={() => 
                    //     <SongCard 
                    //     key={song.id} 
                    //     song={song} 
                    //     destroySong={this.props.destroySong}
                    // />
                    // }
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
export default Songs;


// import React, { Component } from 'react';
// import LyricForm from './LyricForm'
// import Lyrics from '../components/lyrics/Lyrics';
// import { fetchLyrics, createLyric, destroyLyric, } from '../actions/lyrics';
// import { connect } from 'react-redux'

// class LyricsContainer extends Component {

//     // componentDidMount() {
//     //     this.props.fetchLyrics(this.props.song.id);
//     // }

//     componentDidMount() {
//       debugger
//       this.props.fetchLyrics(this.props.match.params.songId);
//     }

//   render() {
//     console.log("LyricsContainer props:", this.props)
//     return (
//       <div>
//           LyricForm Component
//         <LyricForm
//           createLyric={this.props.createLyric}
//           // songId={this.props.song.id}/>
//           songId={this.props.match.params.songId}/>
//         Lyrics Component
//         <Lyrics
//           lyrics={this.props.lyrics}
//           song={this.props.song}
//           // songId={this.props.match.params.songId}
//           destroyLyric={this.props.destroyLyric}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//     lyrics: state.lyrics,
//     lyricFormData: state.lyricFormData })

// // const mapDispatchToProps = dispatch => ({

// //   addSong: text => dispatch({type: 'ADD_SONG', text}),
// //   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// // })

// export default connect(mapStateToProps, { fetchLyrics, createLyric, destroyLyric } )(LyricsContainer)

// import React, { Component } from 'react';
// import LyricForm from './LyricForm'
// import Lyrics from '../components/lyrics/Lyrics'
// import { fetchLyrics, createLyric, destroyLyric } from '../actions/lyrics';
// import { connect } from 'react-redux'
// import { Route } from 'react-router-dom';

// class LyricsContainer extends Component {

//     componentDidMount() {
//         this.props.fetchLyrics();
//     }

//   render() {
//     // console.log(this.props)
//     return (
//       <div>
//         <LyricForm createLyric={this.props.createLyric}/>
//         <Route 
//           // path={'/songs'} 
//           render={() => 
//             <Songs 
//               songs={this.props.songs} 
//               destroySong={this.props.destroySong}
//               fetchLyrics={this.props.fetchLyrics}
//             />
//           }
//         />
//           {/* songs={this.props.songs}
//           destroySong={this.props.destroySong}
//         /> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ 
//     songs: state.songs,
//     songFormData: state.songFormData })

// // const mapDispatchToProps = dispatch => ({

// //   addSong: text => dispatch({type: 'ADD_SONG', text}),
// //   deleteSong: id => dispatch({type: 'DELETE_SONG', id})
// // })

// export default connect(mapStateToProps, { fetchSongs, createSong, destroySong, fetchLyrics })(SongsContainer)
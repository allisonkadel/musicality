export default (state = [], action) => {
    switch(action.type) {

        case 'GET_LYRICS_SUCCESS':
            return action.lyrics

        case 'CREATE_LYRIC_SUCCESS':
            const lyric = {text: action.lyric.text, songId: action.lyric.songId}
            return { ...state,
                lyrics: [...state.lyrics, lyric]
              }
        
        case 'DELETE_LYRIC':
            return state.filter(lyric => action.id !== lyric.id)
        
        // case 'MAKE_LYRICS_REQUEST':
            
        // case 'MAKE_LYRIC_POST_REQUEST':

        default:
              return state;

    }
}



//     case 'ADD_SONG':

//     const song = { text: action.text, id: cuidFn() };
//     return {
//       ...state,
//       songs: [ ...state.songs, song]
//     }

//   case 'DELETE_SONG':
//     const songs = state.songs.filter(song => song.id !== action.id);
//     return { ...state, songs}

//   case 'ADD_LYRIC':

//     const lyric = { text: action.lyric.text, songId: action.lyric.songId, id: cuidFn() };
//     return { ...state,
//       lyrics: [...state.lyrics, lyric]
//     }

//   case 'DELETE_LYRIC':
//     const lyrics = state.lyrics.filter(lyric => lyric.id !== action.id);
//     return {...state, lyrics }
            
//         default:
//             return state;
//     }
// }
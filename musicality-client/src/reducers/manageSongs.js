import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageSongs(state = {
  songs: [],
  lyrics: [],
}, action) {
  switch (action.type) {

    case 'ADD_SONG':

      const song = { text: action.text, id: cuidFn() };
      return {
        ...state,
        songs: [ ...state.songs, song]
      }

    case 'DELETE_SONG':
      const songs = state.songs.filter(song => song.id !== action.id);
      return { ...state, songs}

    case 'ADD_LYRIC':

      const lyric = { text: action.lyric.text, songId: action.lyric.songId, id: cuidFn() };
      return { ...state,
        lyrics: [...state.lyrics, lyric]
      }

    case 'DELETE_LYRIC':
      const lyrics = state.lyrics.filter(lyric => lyric.id !== action.id);
      return {...state, lyrics }

    default:
      return state;

  }
};
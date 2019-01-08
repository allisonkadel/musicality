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

    case 'ADD_REVIEW':

      const review = { text: action.review.text, songId: action.review.songId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};
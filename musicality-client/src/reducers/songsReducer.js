export default (state = [], action) => {
    switch(action.type) {

        case 'GET_SONGS_SUCCESS':
            return action.songs

        case 'CREATE_SONG_SUCCESS':
            return state.concat(action.song) // avoid array mutation
            
        case 'DELETE_SONG':
            return state.filter(song => action.id !== song.id)
        
        // case 'MAKE_SONGS_REQUEST':
            
        // case 'MAKE_SONG_POST_REQUEST':
            
        default:
            return state;
    }
}
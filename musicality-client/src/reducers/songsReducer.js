export default (state = [], action) => {
    switch(action.type) {

        case 'GET_SONGS_SUCCESS':
            return action.songs

        case 'CREATE_SONG':
            return state.concat(action.song) // avoid array mutation

        default:
            return state;
    }
}
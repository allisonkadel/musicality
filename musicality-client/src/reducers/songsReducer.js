export default (state = [], action) => {
    switch(action.type) {

        case 'GET_SONGS_SUCCESS':
            return action.songs

        default:
            return state;
    }
}
export default (state = [], action) => {
    switch(action.type) {

        case 'FILL_SONG':
            return { ...state, currentSong: action.payload }

        default:
            return state;

    }
}
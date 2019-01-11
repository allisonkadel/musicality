
export default (state = {}, action) => {

    switch(action.type) {
        case 'POPULATE_ASSOCIATED_LYRIC':
            return action.associatedSong;

        default:
            return state;
    }

}
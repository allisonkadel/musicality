const initialState = {
    song: {},
    lyric: {}
}

export default (state = initialState, action) => {

    switch(action.type) {
        // case 'GET_SONG':
        //     return action.songFormData;

        // case 'GET_LYRIC':
        //     return initialState;

        default:
            return state;
    }
}
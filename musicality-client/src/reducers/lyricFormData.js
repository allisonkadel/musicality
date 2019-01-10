const initialState = {
    text: '',
    chord: '',
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.lyricFormData;

        case 'RESET_LYRIC_FORM':
            return initialState;

        default:
            return state;
    }
}
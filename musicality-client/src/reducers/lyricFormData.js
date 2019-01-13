const initialState = {
    text: '',
    chord: '',
    prefill: {}
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_LYRIC_DATA':
            return action.lyricFormData;

        case 'RESET_LYRIC_FORM':
            return initialState;
        case 'PRE_POPULATE':
            return { ...state, prefill: action.payload }

        default:
            return state;
    }
}
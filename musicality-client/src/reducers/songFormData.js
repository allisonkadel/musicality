export default (state = {
    name: '',
    artist: '',
    chords: ''
}, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.songFormData

        default:
            return state;
    }
}
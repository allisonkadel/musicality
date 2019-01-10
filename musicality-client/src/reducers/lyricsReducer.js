export default (state = [], action) => {
    switch(action.type) {

        case 'GET_LYRICS_SUCCESS':
            return action.lyrics

        case 'CREATE_LYRIC_SUCCESS':
            return state.concat(action.lyric) // avoid array mutation
        case 'DELETE_LYRIC':
            return state.filter(lyric => action.id !== lyric.id)
        
        // case 'MAKE_LYRICS_REQUEST':
            
        // case 'MAKE_LYRIC_POST_REQUEST':
            
        default:
            return state;
    }
}
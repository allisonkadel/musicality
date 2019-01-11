export default (state = [], action) => {
    switch(action.type) {

        case 'GET_LYRICS_SUCCESS':
            return action.lyrics

        case 'CREATE_LYRIC_SUCCESS':
            return state.concat(action.lyric)
        
        case 'DELETE_LYRIC':
            return state.filter(lyric => action.id !== lyric.id)

        case 'UPDATE_LYRIC':
        debugger
            return state.map(lyric => {
                if (action.lyric.id === lyric.id) {
                    return action.lyric
                }
            })
        
        // case 'MAKE_LYRICS_REQUEST':
            
        // case 'MAKE_POST_REQUEST':

        default:
              return state;

    }
}



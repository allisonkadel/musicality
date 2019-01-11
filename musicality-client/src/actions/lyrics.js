import { resetLyricForm } from './lyricForm';

// ACTION CREATORS - the functions that go to the reducer

const loadLyrics = () => {
    return {
        type: 'MAKE_LYRICS_REQUEST'
    }
}

const setLyrics = lyrics => {
    return {
        type: 'GET_LYRICS_SUCCESS',
        lyrics
    }
}

const postLyric = () => {
    return {
        type: 'MAKE_POST_REQUEST'
    }
}

const addLyric = (lyric) => {
    return {
        type: 'CREATE_LYRIC_SUCCESS',
        lyric
    }
}

const deleteLyric = id => {
    return {
        type: 'DELETE_LYRIC',
        id
    }
}

const editLyric = id => {
    return {
        type: 'UPDATE_LYRIC',
        id
    }
}


// ASYNCHRONOUS ACTIONS - make calls to the backend

export const fetchLyrics = (songId) => {
    return dispatch => {
        dispatch(loadLyrics())
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics`)
        // .then(resp => console.log(resp))
        .then(response => response.json())
        .then(lyrics => dispatch(setLyrics(lyrics)))
        .catch(error => console.log(error))
    }
}

export const createLyric = (songId, lyric) => {
    return dispatch => {
        dispatch(postLyric())
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({lyric: lyric})
        })
        .then(response => response.json())
        .then(lyric => {
            dispatch(addLyric(lyric))
            dispatch(resetLyricForm())
        })
        .catch(error => console.log(error))
    }
}

export const destroyLyric = (songId, id) => {
    return dispatch => {
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            dispatch(deleteLyric(id))
        })
        .catch(error => console.log(error))
    }
}

export const updateLyric = (songId, lyric) => {
    return dispatch => {
        dispatch(postLyric())
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics/${lyric.id}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({lyric: lyric})
        })
        .then(response => response.json())
        .then(lyric => console.log(lyric))
        // .then(lyric => {
        //     dispatch(editLyric(lyric))
        // })
        // .catch(error => console.log(error))
    }
}
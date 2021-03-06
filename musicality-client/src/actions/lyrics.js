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

const editLyric = lyric => {
    return {
        type: 'UPDATE_LYRIC',
        lyric
    }
}

export const fillSong = data => {
    return {
        type: 'FILL_SONG',
        payload: data
    }
}


// ASYNCHRONOUS ACTIONS - make calls to the backend

export const fetchLyrics = (songId) => {
    return dispatch => {
        dispatch(loadLyrics())
        return fetch(`${API_URL}/songs/${songId}/lyrics`)
        // .then(resp => console.log(resp))
        .then(response => response.json())
        .then(lyrics => dispatch(setLyrics(lyrics)))
        .catch(error => console.log(error))
    }
}

export const createLyric = (songId, lyric) => {
    return dispatch => {
        dispatch(postLyric())
        return fetch(`${API_URL}/songs/${songId}/lyrics`,{
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
        return fetch(`${API_URL}/songs/${songId}/lyrics/${id}`, {
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

export const updateLyric = (songId, lyricId, lyric) => {
    return dispatch => {
        dispatch(postLyric())
        return fetch(`${API_URL}/songs/${songId}/lyrics/${lyricId}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({lyric: lyric})
        })
        .then(response => response.json())
        .then(lyric => {
            dispatch(editLyric(lyric))
            dispatch(resetLyricForm())
        })
        .catch(error => console.log(error))
    }
}

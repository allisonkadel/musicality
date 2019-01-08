import { resetSongForm } from './songForm';

// ACTION CREATORS - the functions that go to the reducer

const loadSongs = () => {
    return {
        type: 'MAKE_SONGS_REQUEST'
    }
}

const setSongs = songs => {
    return {
        type: 'GET_SONGS_SUCCESS',
        songs
    }
}

const postRequest = () => {
    return {
        type: 'MAKE_POST_REQUEST'
    }
}

const addSong = song => {
    return {
        type: 'CREATE_SONG_SUCCESS',
        song
    }
}

const deleteSong = id => {
    return {
        type: 'DELETE_SONG',
        id
    }
}

// ASYNCHRONOUS ACTIONS - make calls to the backend

export const fetchSongs = () => {
    return dispatch => {
        dispatch(loadSongs())
        return fetch('http://192.168.1.31:3000/api/v1/songs')
        .then(response => response.json())
        .then(songs => dispatch(setSongs(songs)))
        .catch(error => console.log(error))
    }
}

export const createSong = song => {
    return dispatch => {
        dispatch(postRequest())
        return fetch('http://192.168.1.31:3000/api/v1/songs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({song: song})
        })
        .then(response => response.json())
        .then(song => {
            dispatch(addSong(song))
            dispatch(resetSongForm())
        })
        .catch(error => console.log(error))
    }
}

export const destroySong = id => {
    return dispatch => {
        console.log(id)
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            dispatch(deleteSong(id))
        })
        .catch(error => console.log(error))
    }
}
import { resetSongForm } from './songForm';

// ACTION CREATORS - the functions that go to the reducer

const setSongs = songs => {
    return {
        type: 'GET_SONGS_SUCCESS',
        songs
    }
}

const addSong = song => {
    return {
        type: 'CREATE_SONG_SUCCESS',
        song
    }
}

// ASYNCHRONOUS ACTIONS - make calls to the backend

export const fetchSongs = () => {
    return dispatch => {
        return fetch('http://192.168.1.31:3000/api/v1/songs')
        .then(response => response.json())
        .then(songs => dispatch(setSongs(songs)))
        .catch(error => console.log(error))
    }
}

export const createSong = song => {
    return dispatch => {
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
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${id}`, {
            method: 'DELETE'
        }).then(console.log(response))
    }
}


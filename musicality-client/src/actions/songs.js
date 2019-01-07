

// ACTION CREATORS - the functions that go to the reducer

const setSongs = songs => {
    return {
        type: 'GET_SONGS_SUCCESS',
        songs
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
            data: JSON.stringify(song)
        })
        .then(response => console.log(response))
    }
}

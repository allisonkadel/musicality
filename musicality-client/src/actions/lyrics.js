// import { resetForm } from './lyricForm';

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

const add_lyric = lyric => {
    return {
        type: 'CREATE_LYRIC_SUCCESS',
        lyric
    }
}

const delete_lyric = id => {
    return {
        type: 'DELETE_LYRIC',
        id
    }
}

// ASYNCHRONOUS ACTIONS - make calls to the backend

export const fetchLyrics = (songId) => {
    return dispatch => {
        dispatch(loadLyrics())
        return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics`)
        .then(resp => console.log(resp))
        // .then(response => response.json())
        // .then(lyrics => dispatch(setLyrics(lyrics)))
        // .catch(error => console.log(error))
    }
}

// export const create = (songId,lyric) => {
//     return dispatch => {
//         dispatch(postRequest())
//         return fetch(`http://192.168.1.31:3000/api/v1/songs/${songId}/lyrics`,{
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({lyric: lyric})
//         })
//         .then(response => response.json())
//         .then(lyric => {
//             dispatch(add(lyric))
//             dispatch(resetForm())
//         })
//         .catch(error => console.log(error))
//     }
// }

// export const destroy = id => {
//     return dispatch => {
//         console.log(id)
//         return fetch(`http://192.168.1.31:3000/api/v1/lyrics/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(resp => {
//             dispatch(delete(id))
//         })
//         .catch(error => console.log(error))
//     }
// }
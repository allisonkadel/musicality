

// ACTION CREATORS - the functions that go to the reducer


// ASYNCHRONOUS ACTIONS

export const fetchSongs = () => {
    return dispatch => {
        return fetch('http://192.168.1.31:3000/api/v1/songs')
        .then(response => response.json())
        .then(songs => this.setState({songs: songs}))
        .catch(error => console.log(error))
    }
}


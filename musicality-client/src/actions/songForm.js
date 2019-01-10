// ACTION CREATORS

export const updateSongFormData = songFormData => {
    return {
        type: 'UPDATED_SONG_DATA',
        songFormData
    }
}

export const resetSongForm = () => {
    return {
        type: 'RESET_SONG_FORM'
    }
}
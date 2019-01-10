// ACTION CREATORS

export const updateLyricFormData = lyricFormData => {
    return {
        type: 'UPDATED_DATA',
        lyricFormData
    }
}

export const resetLyricForm = () => {
    return {
        type: 'RESET_SONG_FORM'
    }
}
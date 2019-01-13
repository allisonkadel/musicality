// ACTION CREATORS

export const updateLyricFormData = lyricFormData => {
    return {
        type: 'UPDATED_LYRIC_DATA',
        lyricFormData
    }
}

export const resetLyricForm = () => {
    return {
        type: 'RESET_LYRIC_FORM'
    }
}

export const prePopulate = data => {
    return {
        type: 'PRE_POPULATE',
        payload: data
    }
}
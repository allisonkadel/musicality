import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSongFormData } from '../actions/songForm';
import { createSong } from '../actions/songs';
import './SongForm.css'

class SongForm extends Component {


    handleOnChange = event => {
        const { name, value } = event.target;
        const currentSongFormData = Object.assign({}, this.props.songFormData, {
            [name]: value
        })
        this.props.updateSongFormData(currentSongFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createSong(this.props.songFormData)
    } 

    render() {
        const { name, artist, chords } = this.props.songFormData;
        return (
            <div className='Songs-form'>
                <h4 className='Form-header'>Add a Song to Your Library</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Title</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='name'
                            value={name}
                        />
                    </div>
                    <div>
                        <label>Artist</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='artist'
                            value={artist}
                        />
                    </div>
                    <div>
                        <label>Chords</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='chords'
                            value={chords}
                        />
                    </div>
                    <button type='submit'>Add Song</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songFormData: state.songFormData
    }
}

export default connect(mapStateToProps, {
    createSong,
    updateSongFormData
 })(SongForm);
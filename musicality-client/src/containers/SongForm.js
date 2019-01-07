import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateSongFormData from '../actions/songForm';

class SongForm extends Component {


    handleOnChange = event => {
        const { name, value } = event.target;
        const currentSongFormData = Object.assign({}, this.props.songFormData, {
            [name]: value
        })
        this.props.updateSongFormData(currentSongFormData)
    }

    render() {
        const { title, artist, chords } = this.props.songFormData;
        return (
            <div>
                Add a Song to Your Library
                <form>
                    <div>
                        <label>Title</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='title'
                            value={this.state.title}
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

export default connect(mapStateToProps)(SongForm);
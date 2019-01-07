import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongForm extends Component {
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
                            name='title'
                            value={title}
                        />
                    </div>
                    <div>
                        <label>Artist</label>
                        <input
                            type='text'
                            name='artist'
                            value={artist}
                        />
                    </div>
                    <div>
                        <label>Chords</label>
                        <input
                            type='text'
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
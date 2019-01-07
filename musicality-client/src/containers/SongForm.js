import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongForm extends Component {
    render() {
        return (
            <div>
                Add a New Song
                <form>
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
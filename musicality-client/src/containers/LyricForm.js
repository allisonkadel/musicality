import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLyricFormData } from '../actions/lyricForm';
import { createLyric } from '../actions/lyrics';
import './LyricForm.css'

class LyricForm extends Component {


    handleOnChange = event => {
        const { name, value } = event.target;
        const currentLyricFormData = Object.assign({}, this.props.lyricFormData, {
            [name]: value
        })
        this.props.updateLyricFormData(currentLyricFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createLyric(this.props.songId, this.props.lyricFormData)
    } 

    render() {
        const { text, chord } = this.props.lyricFormData;
        return (
            <div className='Songs-form'>
                <h4 className='Form-header'>Add Lyrics to Your Song</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Text</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='text'
                            value={text}
                        />
                    </div>
                    <div>
                        <label>Chord</label>
                        <input
                            type='text'
                            onChange={this.handleOnChange}
                            name='chord'
                            value={chord}
                        />
                    </div>
                    <button type='submit'>Add Lyric</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lyricFormData: state.lyricFormData
    }
}

export default connect(mapStateToProps, {
    createLyric,
    updateLyricFormData
 })(LyricForm);

 
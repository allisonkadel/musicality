import React, { Component } from 'react';
import { updateLyric } from '../actions/lyrics';
import { updateLyricFormData } from '../actions/lyricForm';
import { connect } from 'react-redux';
import '../components/lyrics/Lyrics.css';

class EditLyric extends Component {

    componentDidMount(){
        const currentLyricFormData = Object.assign({}, this.props.lyricFormData.prefill)
        this.props.updateLyricFormData(currentLyricFormData)
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentLyricFormData = Object.assign({}, this.props.lyricFormData, {
            [name]: value
        })
        this.props.updateLyricFormData(currentLyricFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateLyric(this.props.match.params.songId, this.props.match.params.id, this.props.lyricFormData)
        .then(() => this.props.history.push(`/songs/${this.props.match.params.songId}/lyrics`))
    }

    render() {

        console.log("THESE ARE EDIT LYRICS PROPS: ", this.props)

        const { text, chord } = this.props.lyricFormData;
        return (
            <div className='Songs-form'>
                <h4 className='Form-header'>Edit Your Lyric</h4>
                <form className='LyricCard' onSubmit={this.handleOnSubmit}>
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
                    <button type='submit'>Update Lyric</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        lyricFormData: state.lyricFormData,
        prefill: state.lyricFormData.prefill
    }
}

export default connect(mapStateToProps, {
    updateLyricFormData,
    updateLyric
 })(EditLyric);

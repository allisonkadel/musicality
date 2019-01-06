import React, { Component } from 'react';
import './App.css'

const Songs = () => 
    <div>
        <h3>Songs Component</h3>
    </div>


class App extends Component {
    render() {
        return (
            <div className='App'>
                App Container
                <Songs/>
            </div>
        )
    }
}

export default App;
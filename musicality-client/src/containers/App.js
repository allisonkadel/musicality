import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Songs from './Songs';
// import SongForm from './SongForm';
import NavBar from '../components/NavBar';
import './App.css'
// Import Presentational Components
import Home from '../components/Home';
import ChordChart from '../components/ChordChart';
import Training from '../components/Training';
import Muse from '../components/Musee';

// Import Container Component
import SongsContainer from '../containers/SongsContainer';
import LyricsContainer from '../containers/LyricsContainer'

class App extends Component {

    render() {
        return (
            <div className='App'>
                <Router>
                    <div>
                        <NavBar/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/songs' component={SongsContainer}/>
                            <Route path='/chords' component={ChordChart}/>
                            <Route path='/training' component={Training}/>
                            <Route path='/muse' component={LyricsContainer}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;

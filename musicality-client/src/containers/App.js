import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
import './App.css'

// Import Presentational Components
import Home from '../components/Home';
import ChordChart from '../components/ChordChart';
import Training from '../components/Training';
import Muse from '../components/Muse';
import EditLyric from '../hybrids/EditLyric';

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
                            <Route exact path='/songs' component={SongsContainer}/>
                            <Route path='/chords' component={ChordChart}/>
                            <Route path='/training' component={Training}/>
                            <Route path='/muse' component={Muse}/>
                            <Route exact path='/songs/:songId/lyrics' component={LyricsContainer}/>
                            <Route path='/songs/:songId/lyrics/:id/edit' component={EditLyric}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;

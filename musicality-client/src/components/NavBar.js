import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './NavBar.css'

// Import Presentational Components
import Home from './Home';
import ChordChart from './ChordChart';
import Training from './Training';
import Muse from './Musee';

// Import Container Component
import SongsContainer from '../containers/SongsContainer';


const NavBar = () => {
    return(
        <div>
            <div >
                <nav className='Nav-bar'>
                    <NavLink className='Nav-link' to='/'>Home</NavLink>
                    <NavLink className='Nav-link' to='/songs'>Song Library</NavLink>
                    <NavLink className='Nav-link' to='/chords'>Chord Charts</NavLink>
                    <NavLink className='Nav-link' to='/training'>Training Mode</NavLink>
                    <NavLink className='Nav-link' to='/muse'>Muse</NavLink>
                </nav>
            </div>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/songs' component={SongsContainer}/>
                <Route path='/chords' component={ChordChart}/>
                <Route path='/training' component={Training}/>
                <Route path='/muse' component={Muse}/>

            </div>
        </div>
    )
}

export default NavBar;
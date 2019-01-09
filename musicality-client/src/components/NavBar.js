import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './NavBar.css'

// Import Presentational Components
import Home from './Home';
import ChordChart from './ChordChart';

// Import Container Component
import SongsContainer from '../containers/SongsContainer';


const NavBar = () => {
    return(
        <div>
            <div >
                <nav className='Nav-bar'>
                    <NavLink className='Nav-link' to='/'>Home</NavLink>
                    <NavLink className='Nav-link' to='/library'>Library</NavLink>
                    <NavLink className='Nav-link' to='/chords'>Chords</NavLink>
                </nav>
            </div>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/library' component={SongsContainer}/>
                <Route path='/chords' component={ChordChart}/>
            </div>
        </div>
    )
}

export default NavBar;
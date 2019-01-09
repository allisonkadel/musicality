import React from 'react';
import { NavLink, Route } from 'react-router-dom';

// Import Presentational Components
import Home from './Home';
import ChordChart from './ChordChart';

// Import Container Component
import SongsContainer from '../containers/SongsContainer';


const NavBar = () => {
    return(
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/library'>Library</NavLink>
                <NavLink to='/chords'>Chords</NavLink>
            </nav>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/library' component={SongsContainer}/>
                <Route path='/chords' component={ChordChart}/>
            </div>
        </div>
    )
}

export default NavBar;
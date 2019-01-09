import React from 'react';
import { Link, Route } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/library'>Library</Link>
                <Link to='/chords'>Chords</Link>
            </nav>
            <div>
                <Route path='/' component={Home}/>
                <Route path='/library' component={Songs}/>
                <Route path='/chords' component={ChordChart}/>
            </div>
        </div>
    )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'




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
        </div>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function hamburger() {
    document.querySelector(".hamburger").classList.toggle("active")
    document.querySelector(".hamburger-menu").classList.toggle("active")
    document.querySelector(".Nav").classList.toggle("active")
}

function Navbar(){
    return (
       <nav className='Nav'>
        <ul className='nav-menu'>
            <li className='NavItem Nav-title'>Sebastian Gillis</li>
            <li className="NavItem" id="Navline"></li>
            <div className='hamburger' onClick={hamburger}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <div className='hamburger-menu'>
                <li className='NavItem Nav-Sub-Title hamburger-item'><Link to="/" className='Link-Styles'>Home</Link></li>
                <li className='NavItem Nav-Sub-Title hamburger-item'><Link to="projects" className='Link-Styles'>Projects</Link></li>
                <li className='NavItem Nav-Sub-Title hamburger-item'><Link to="/contact" className='Link-Styles'>Contact</Link></li>
            </div>
            
        </ul>
       </nav>
    )
}

export default Navbar;
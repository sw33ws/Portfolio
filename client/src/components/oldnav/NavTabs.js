import React from 'react';
import {Link} from 'react-scroll'
import './NavTabs.css';

function hamburger() {
    document.querySelector(".hamburger").classList.toggle("active")
    document.querySelector(".hamburger-menu").classList.toggle("active")
}

function NavTabs(){
    return (
       <div className='NavTab'>
        <ul>
            <li className="NavItem" id="Me">Sebastian Gillis</li>
            <li className="NavItem" id="line"><span id='hiddentext'>.</span></li>

            <div className='hamburger' onClick={hamburger}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <div className='hamburger-menu'>
                <li className="NavItem" ><Link to="Aboutme" spy={true} smooth={true} offset={50} duration={500}>About me</Link></li>
                <li className="NavItem" ><Link to="Work" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                <li className="NavItem" ><Link to="Skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                <li className="NavItem" ><Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
            </div>
        </ul>
       </div>
    )
}

export default NavTabs;
import React from 'react';
import './NavTabs.css';

var x = window.matchMedia("(max-width: 1000px)")

function AboutMe() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

function Work() {
    if (x.matches) {
        window.scrollTo({top: 200, left: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
    }
}

function Skills() {
    if (x.matches) {
        window.scrollTo({top: 550, left: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: 2000, left: 0, behavior: 'smooth'});
    }
}

function Contact() {
    window.scrollTo({top: 2500, left: 0, behavior: 'smooth'});
}

function NavTabs(){
    return (
       <div className='NavTab'>
        <ul>
            <li className="NavItem" id="Me">Sebastian Gillis</li>
            <li className="NavItem" id="line"></li>
            <li className="NavItem" onClick={AboutMe}>About me</li>
            <li className="NavItem" onClick={Work}>Work</li>
            <li className="NavItem" onClick={Skills}>Skills</li>
            <li className="NavItem" onClick={Contact}>Contact</li>
        </ul>
       </div>
    )
}

export default NavTabs;
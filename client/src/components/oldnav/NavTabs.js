import React from 'react';
import {Link} from 'react-scroll'
import './NavTabs.css';

// var x = window.matchMedia("(max-width: 1000px)")

// function AboutMe() {
//     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
// }

// function Work() {
//     if (x.matches) {
//         window.scrollTo({top: 200, left: 0, behavior: 'smooth'});
//     } else {
//         window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
//     }
// }

// function Skills() {
//     if (x.matches) {
//         window.scrollTo({top: 550, left: 0, behavior: 'smooth'});
//     } else {
//         window.scrollTo({top: 2000, left: 0, behavior: 'smooth'});
//     }
// }

// function Contact() {
//     window.scrollTo({top: 2500, left: 0, behavior: 'smooth'});
// }

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

            {/* <li className="NavItem" onClick={AboutMe}>About me</li>
            <li className="NavItem" onClick={Work}>Work</li>
            <li className="NavItem" onClick={Skills}>Skills</li>
            <li className="NavItem" onClick={Contact}>Contact</li> */}

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
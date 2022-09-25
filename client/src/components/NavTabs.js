import React from 'react';
import './NavTabs.css';

function NavTabs(){
    return (
       <div className='NavTab'>
        <ul>
            <li className="NavItem" id="Me">Sebastian Gillis</li>
            <li className="NavItem" id="line"></li>
            <li className="NavItem"><a href='aboutmeLink'>About me</a></li>
            <li className="NavItem"><a href='workLink'>Work</a></li>
            <li className="NavItem"><a href='skillLink'>Skills</a></li>
        </ul>
       </div>
    )
}

export default NavTabs;
import React from 'react';
import './skills.css';

function Skills(){
    return (
        <div className='skills-background' id='Skills'>
        <div id='skillsbackgroundcolor'>
            <div className='Skills'>
                <div className='skills-card'>
                    <h1 className='skills-title'>Languages</h1>
                    <ul className='languages-skills'>
                        <li className='list-item'>HTML5</li>
                        <li className='list-item'>CSS</li>
                        <li className='list-item'>Javascript</li>
                        <li className='list-item'>Node Js</li>
                        <li className='list-item'>MongoDB</li>
                        <li className='list-item'>MySQL</li>
                        <li className='list-item'>GraphicQL</li>
                        <li className='list-item'>React</li>
                        <li className='list-item'>Python</li>
                        <li className='list-item'>Java</li>
                    </ul>
                </div>
                <div className='skills-card'>
                <h1 className='skills-title'>Applications</h1>
                    <ul className='applications-skills'>
                        <li className='list-item'>BootStrap</li>
                        <li className='list-item'>Express</li>
                        <li className='list-item'>JQuery</li>
                        <li className='list-item'>TailWind</li>
                        <li className='list-item'>Docker</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Skills;
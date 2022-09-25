import React from 'react';
import './skills.css';

function Skills(){
    return (
        <div id='skillsbackgroundcolor' className='row'>
            <h1 className='title1'>Skills</h1>

            <div className='col d-none d-md-block'></div>

            <div className='col'>
                <div className='listbox'>
            <h2 className='text1'><span id="skillsHighLight">Languages</span> 
                <div className='grid'>
                    <li className='listItems'>HTML5</li>
                    <li className='listItems'>CSS</li>
                    <li className='listItems'>Javascript</li>
                    <li className='listItems'>Node Js</li>
                    <li className='listItems'>MongoDB</li>
                    <li className='listItems'>MySQL</li>
                    <li className='listItems'>GraphicQL</li>
                    <li className='listItems'>React</li>
                </div>
            </h2>
            </div>
            </div>

            <div className='col'>
                <div className='listbox'>
            <h2 className='text1'><span id="skillsHighLight">Applications</span>
                    <li className='listItems'>BootStrap</li>
                    <li className='listItems'>Express</li>
                    <li className='listItems'>JQuery</li>
                    <li className='listItems'>TailWind</li>
            </h2>
            </div>
            </div>

            <div className='col d-none d-md-block'></div>

        </div>
    )
}

export default Skills;
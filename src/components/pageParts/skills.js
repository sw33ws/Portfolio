import React from 'react';
import './skills.css';

function Skills(){
    return (
        <div id='skillsbackgroundcolor' className='row'>
            <h1 className='title1'>Skills</h1>

            <div className='col'>
            <ul><h2 className='text1'><span id="skillsHighLight">Languages</span> 
                <li>HTML5</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node Js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>GraphicQL</li>
                <li>React</li>
            </h2></ul>
            </div>

            <div className='col'>
            <ul><h2 className='text1'><span id="skillsHighLight">Applications</span>
                <li>BootStrap</li>
                <li>Express</li>
                <li>JQuery</li>
                <li>TailWind</li>
            </h2></ul>
            </div>
        </div>
    )
}

export default Skills;
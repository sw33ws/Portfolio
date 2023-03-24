import React from 'react';
import './projects.css';

import zeldaimage from '../images/zelda-logo.jpg'
import goldendevs from '../images/developers_screenshot.png'
import weatherimage from '../images/weather.png'
import downloads from '../images/downloads.png'

import github from '../images/githubicon.png'
import website from '../images/websiteicon.png'

function Projects(){
    return (
        <div className='projects-body'>
            
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
                        <li className='list-item'>Docker</li>
                        <li className='list-item'>Python</li>
                    </ul>
                </div>
                <div className='skills-card'>
                <h1 className='skills-title'>Applications</h1>
                    <ul className='applications-skills'>
                        <li className='list-item'>BootStrap</li>
                        <li className='list-item'>Express</li>
                        <li className='list-item'>JQuery</li>
                        <li className='list-item'>TailWind</li>
                    </ul>
                </div>
            </div>

            <div className='project-holder'>

                <div className='projects'>
                    <img alt="Zelda Travel Companion"src={zeldaimage} className="project-image-background"></img>
                    <div className='project-items'>
                        <h1 className='project-title'>Zelda Travel Companion</h1>
                        <a href='https://github.com/Ydennekrf/Zelda-Travel-App'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://ydennekrf.github.io/Zelda-Travel-App/'><img alt='something' className='project-github' src={website}></img></a>
                    </div>
                </div>

                <div className='projects'>
                    <img alt="GoldenDevs"src={goldendevs} className="project-image-background"></img>
                    <div className='project-items'>
                        <h1 className='project-title'>Golden <br></br>Devs</h1>
                        <a href='https://github.com/SuedePritch/fluffy-palm-tree'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://protected-peak-08029.herokuapp.com/'><img alt='something' className='project-github' src={website}></img></a>
                    </div>
                </div>

                <div className='projects'>
                    <img alt="Weather App"src={weatherimage} className="project-image-background"></img>
                    <div className='project-items'>
                        <h1 className='project-title'>Weather <br></br>App</h1>
                        <a href='https://github.com/sw33ws/Weather-App'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://sw33ws.github.io/Weather-App/'><img alt='something' className='project-github' src={website}></img></a>
                    </div>
                </div>

                <div className='projects'>
                    <img alt="DownLoad Page"src={downloads} className="project-image-background"></img>
                    <div className='project-items'>
                        <h1 className='project-title'>Download <br></br>page</h1>
                        <a href='https://github.com/sw33ws/My-Download-Page'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://sw33ws.github.io/My-Download-Page/'><img alt='something' className='project-github' src={website}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
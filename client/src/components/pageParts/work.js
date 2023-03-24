import React from 'react';
import './work.css';

import github from '../images/githubicon.png'
import website from '../images/websitenew.png'
import weatherimage from '../images/weather.png'
import goldendevs from '../images/goldendev.png'
import zeldaimage from '../images/zelda-logo.jpg'
// import downloads from '../images/downloads.png'
import downloads from '../images/download.png'

function Work(){
    return(
        <div id='backgroundcolor-work'>
        <div className='row' id='workbackground'>
            <div>
                <h1 className='title' id='workLink'>Past Work</h1>
            </div>

            <div className='project-holder'>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Zelda Travel Companion</span> is a lightweight travel companion that can quickly gather information on hotels, local events and music in the city of your choice.</h1>
                        <a href='https://github.com/Ydennekrf/Zelda-Travel-App'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://ydennekrf.github.io/Zelda-Travel-App/'><img alt='something' className='project-website' src={website}></img></a>
                    <img alt="Zelda Travel Companion"src={zeldaimage} className="project-image-background"></img>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Golden Devs</span> is a freelance developer website that allows freelance developers to advertise their expertise, languages and experience. The website also allows for clients to put up requests for what they need.</h1>
                        <a href='https://github.com/SuedePritch/fluffy-palm-tree'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://protected-peak-08029.herokuapp.com/'><img alt='something' className='project-website' src={website}></img></a>
                    <img alt="GoldenDevs"src={goldendevs} className="project-image-background"></img>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Weather App</span> is a simple app that tells you the weather of a city you search up, alongside a five day forecast.</h1>
                        <a href='https://github.com/sw33ws/Weather-App'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://sw33ws.github.io/Weather-App/'><img alt='something' className='project-website' src={website}></img></a>
                    <img alt="Weather App"src={weatherimage} className="project-image-background"></img>
                </div>

                <div className='projects'>
                        <h1 className='text'><span className='sub-title'>Download page</span> is a simple download page where you can check out and download my projects</h1>
                        <a href='https://github.com/sw33ws/My-Download-Page'><img alt='something' className='project-github' src={github}></img></a>
                        <a href='https://sw33ws.github.io/My-Download-Page/'><img alt='something' className='project-website' src={website}></img></a>
                    <img alt="DownLoad Page"src={downloads} className="project-image-background"></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Work;
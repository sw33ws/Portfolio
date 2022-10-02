import React from 'react';
import './work.css';

import github from '../images/githubicon.png'
import website from '../images/websiteicon.png'
import weatherimage from '../images/weather.png'
import goldendevs from '../images/goldendev.png'
import zeldaimage from '../images/zelda-logo.jpg'
import jadeimage from '../images/jadelogo.png'

function Work(){
    return(
        <div className='row' id='workbackground'>
            <div>
                <h1 className='title' id='workLink'>Past Work</h1>
            </div>

            <div className='col'>
                <div className='workbox'>
                    <h2 className='text'><span id='workHighLight'>Weather App</span> is a simple app that tells you the weather of a city you search up, along side a five day forecast.</h2>
                    <img alt="Weather App"src={weatherimage} id="images"></img>
                    <a href='https://github.com/sw33ws/Weather-App'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://sw33ws.github.io/Weather-App/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

                <div className='workbox'>
                    <h2 className='text'><span id='workHighLight'>Zelda Travel Companion</span> is a a lightweight travel companion that can quickly gather information on hotels, local events and music in the city of your choice.</h2>
                    <img alt=""src={zeldaimage} id="images"></img>\
                    <a href='https://github.com/Ydennekrf/Zelda-Travel-App'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://ydennekrf.github.io/Zelda-Travel-App/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

            </div>
            <div className='col'>
                <div className='workbox'>
                    <h2 className='text'><span id='workHighLight'>GoldenDevs</span> is a freelance developer website that allows freelance developers to advertise their exertise, languages and experience. The website also allows for clinets to put up requsets for what they need.</h2>
                    <img alt="Freelance Developer Work"src={goldendevs} id="images"></img>
                    <a href='https://github.com/SuedePritch/fluffy-palm-tree'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://protected-peak-08029.herokuapp.com/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>

                <div className='workbox'>
                    <h2 className='text'><span id='workHighLight'>J.A.T.E</span> is a simple downloadable note book, that can be used, and saved online or offline</h2>
                    <img alt=""src={jadeimage} id="images"></img>
                    <a href='https://github.com/sw33ws/solid-pancake'><img alt="Github link"src={github} id="githubimage"></img></a>
                    <a href='https://mighty-hamlet-13053.herokuapp.com/'><img alt="Github link"src={website} id="websiteimage"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Work;